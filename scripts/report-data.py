#!/usr/bin/env python3
"""Dump real report data as JSON for the monthly client report.

Pulls, via the seo-bot service account (GCP_SA_KEY_JSON env var):
  - GSC: last 28 days vs prior 28 days (clicks, impressions, avg position)
  - GSC: top 10 queries by clicks (last 28 days)
  - Leads sheet: rows added this calendar month + total

Prints a single JSON object to stdout between REPORT_DATA_START/END markers.
Read-only. Never writes to any Google property.
"""
import json
import os
import sys
from datetime import date, timedelta

GSC_SITE = "sc-domain:ginagonzaleznotary.com"
LEADS_SHEET_ID = "1acO0nmC4xnGXM4k1niXWWLWVESv9Vz3vAmSGNbSxvD4"
LEADS_TAB = "Sheet1"


def gsc_window(service, start: date, end: date, dimensions=None, row_limit=10):
    body = {"startDate": str(start), "endDate": str(end), "rowLimit": row_limit}
    if dimensions:
        body["dimensions"] = dimensions
    return service.searchanalytics().query(siteUrl=GSC_SITE, body=body).execute().get("rows", [])


def main() -> int:
    sa_json = os.environ.get("GCP_SA_KEY_JSON")
    if not sa_json:
        print("ERROR: GCP_SA_KEY_JSON not set", file=sys.stderr)
        return 2

    from google.oauth2.service_account import Credentials
    from googleapiclient.discovery import build
    import gspread

    out = {}

    # ── GSC ──
    creds = Credentials.from_service_account_info(
        json.loads(sa_json),
        scopes=["https://www.googleapis.com/auth/webmasters.readonly"],
    )
    service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    end = date.today() - timedelta(days=3)  # GSC data lags ~3 days
    start = end - timedelta(days=27)
    prior_end = start - timedelta(days=1)
    prior_start = prior_end - timedelta(days=27)

    def totals(rows):
        clicks = sum(r.get("clicks", 0) for r in rows)
        imps = sum(r.get("impressions", 0) for r in rows)
        pos = (
            sum(r.get("position", 0) * r.get("impressions", 0) for r in rows) / imps
            if imps else None
        )
        return {"clicks": clicks, "impressions": imps,
                "avg_position": round(pos, 1) if pos else None}

    cur_days = gsc_window(service, start, end, ["date"], row_limit=100)
    pri_days = gsc_window(service, prior_start, prior_end, ["date"], row_limit=100)
    out["gsc"] = {
        "window": {"start": str(start), "end": str(end)},
        "current_28d": totals(cur_days),
        "prior_28d": totals(pri_days),
        "top_queries": [
            {"query": r["keys"][0], "clicks": r.get("clicks", 0),
             "impressions": r.get("impressions", 0),
             "position": round(r.get("position", 0), 1)}
            for r in gsc_window(service, start, end, ["query"], row_limit=10)
        ],
    }

    # ── Leads sheet ──
    s_creds = Credentials.from_service_account_info(
        json.loads(sa_json),
        scopes=["https://www.googleapis.com/auth/spreadsheets.readonly"],
    )
    gc = gspread.authorize(s_creds)
    rows = gc.open_by_key(LEADS_SHEET_ID).worksheet(LEADS_TAB).get_all_values()
    header, data = (rows[0], rows[1:]) if rows else ([], [])
    month_prefix = date.today().strftime("%Y-%m")
    # Date column is column 0; leads-sync writes ISO-ish dates
    this_month = [r for r in data if r and r[0].startswith(month_prefix)]
    out["leads"] = {"total_all_time": len(data), "this_month": len(this_month),
                    "month": month_prefix}

    print("REPORT_DATA_START")
    print(json.dumps(out, indent=2))
    print("REPORT_DATA_END")
    return 0


if __name__ == "__main__":
    sys.exit(main())
