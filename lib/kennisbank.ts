import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type AutoKnowledgeItem = {
  slug: string;
  title: string;
  description: string;
  body: string;
  service: string;
  keywords: string[];
};

const AUTO_DIR = path.join(process.cwd(), "content", "kennisbank-auto");

function normalizeRawMarkdown(raw: string): string {
  return raw
    .replace(/^\uFEFF/, "")
    .replace(/^\\---\s*$/gm, "---")
    .replace(/^\\##\s+/gm, "## ")
    .replace(/^\\###\s+/gm, "### ")
    .replace(/^\\####\s+/gm, "#### ")
    .replace(/^\\-\s+/gm, "- ")
    .replace(/^\\\*\s+/gm, "* ")
    .replace(/Ã«/g, "ë")
    .replace(/Ã©/g, "é")
    .replace(/Ã¨/g, "è")
    .replace(/Ãª/g, "ê")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¯/g, "ï")
    .replace(/Ã¼/g, "ü")
    .replace(/â€™/g, "’")
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/â€¦/g, "…");
}

function normalizeKeywords(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((v) => String(v).trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }

  return [];
}

export function getAutoKnowledgeSlugs(): string[] {
  if (!fs.existsSync(AUTO_DIR)) return [];

  return fs
    .readdirSync(AUTO_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAutoKnowledgeItem(slug: string): AutoKnowledgeItem | null {
  const filePath = path.join(AUTO_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const normalized = normalizeRawMarkdown(raw);
  const parsed = matter(normalized);

  const title =
    typeof parsed.data.title === "string" && parsed.data.title.trim()
      ? parsed.data.title.trim()
      : slug;

  const description =
    typeof parsed.data.description === "string" && parsed.data.description.trim()
      ? parsed.data.description.trim()
      : "";

  const frontmatterSlug =
    typeof parsed.data.slug === "string" && parsed.data.slug.trim()
      ? parsed.data.slug.trim()
      : slug;

  const service =
    typeof parsed.data.service === "string" && parsed.data.service.trim()
      ? parsed.data.service.trim()
      : "";

  const keywords = normalizeKeywords(parsed.data.keywords);

  return {
    slug: frontmatterSlug,
    title,
    description,
    body: parsed.content.trim(),
    service,
    keywords,
  };
}