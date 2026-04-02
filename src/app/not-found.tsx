import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-gray-50 flex flex-col items-center justify-center text-center px-6 py-32 sm:py-48">
      <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="font-manrope text-4xl sm:text-5xl font-bold text-brand-black mb-6">
        Page Not Found
      </h1>
      <p className="text-brand-black/70 text-lg max-w-md mb-10">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved or never existed.
      </p>
      <Link
        href="/"
        className="inline-block bg-brand-gold text-brand-black font-semibold px-8 py-3 rounded-lg hover:brightness-95 transition-all"
      >
        Back to Homepage
      </Link>
    </section>
  );
}
