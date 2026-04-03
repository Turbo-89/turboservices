import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDirSafe(p: string): string[] {
  if (!fs.existsSync(p)) return [];
  return fs.readdirSync(p);
}

/* =========================
   COMMERCIAL LINKS
========================= */

export function getCommercialLinks(service: string) {
  const dir = path.join(CONTENT_ROOT, "commercial", service);
  return readDirSafe(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      return {
        href: `/commercial/${service}/${slug}`,
        label: slug.replace(/-/g, " "),
      };
    });
}

/* =========================
   KNOWLEDGE LINKS
========================= */

export function getKnowledgeLinks() {
  const dir = path.join(CONTENT_ROOT, "kennisbank-auto");

  return readDirSafe(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      return {
        href: `/kennisbank/auto/${slug}`,
        label: slug.replace(/-/g, " "),
      };
    });
}

/* =========================
   FILTER PER SERVICE
========================= */

export function filterKnowledgeByService(
  links: { href: string; label: string }[],
  service: string
) {
  return links.filter((l) =>
    l.href.includes(service)
  );
}