import { getCollection } from "astro:content";
import { SITE_URL } from "../config";
import createSlug from "../lib/createSlug";

// lastmod is the build date for pages that change with every deploy, and the
// post's own date for blog posts.
const staticPaths = [
  { path: "/", priority: "1.0" },
  { path: "/software-engineer-islamabad/", priority: "0.9" },
  { path: "/projects/", priority: "0.9" },
  { path: "/resume/", priority: "0.8" },
  { path: "/contact/", priority: "0.7" },
  { path: "/blog/", priority: "0.6" },
];

const day = (d) => new Date(d).toISOString().slice(0, 10);

export async function GET() {
  const built = day(Date.now());
  const posts = await getCollection("blog");
  const urls = [
    ...staticPaths.map((p) => ({ ...p, lastmod: built })),
    ...posts.map((post) => ({
      path: `/blog/${createSlug(post.data.title, post.slug)}/`,
      lastmod: day(post.data.updatedDate ?? post.data.pubDate),
      priority: "0.6",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
