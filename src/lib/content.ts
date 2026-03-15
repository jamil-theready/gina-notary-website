import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const contentDirectory = path.join(process.cwd(), "content");

export interface ServiceFrontmatter {
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  serviceType: string;
  image: string;
  imageAlt: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  order: number;
  parentService?: string;
  schemaType?: string;
}

export interface BlogFrontmatter {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  date: string;
  image: string;
  imageAlt: string;
  serviceType: string;
  linkedService?: string;
}

function getContentFiles(subdir: string): string[] {
  const dir = path.join(contentDirectory, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getAllServices(): (ServiceFrontmatter & { content: string })[] {
  const files = getContentFiles("services");
  return files
    .map((filename) => {
      const filePath = path.join(contentDirectory, "services", filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return { ...(data as ServiceFrontmatter), content };
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getServiceBySlug(
  slug: string
): (ServiceFrontmatter & { content: string }) | null {
  const services = getAllServices();
  return services.find((s) => s.slug === slug) || null;
}

export function getAllBlogPosts(): (BlogFrontmatter & { content: string })[] {
  const files = getContentFiles("blog");
  return files
    .map((filename) => {
      const filePath = path.join(contentDirectory, "blog", filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return { ...(data as BlogFrontmatter), content };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getBlogPostBySlug(
  slug: string
): (BlogFrontmatter & { content: string }) | null {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}
