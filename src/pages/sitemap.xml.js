import { getCollection } from "astro:content";
import { SITE_URL } from "../config";
import createSlug from "../lib/createSlug";

const staticPaths = ["/", "/projects/", "/blog/", "/resume/", "/contact/"];

export async function GET() {
  const posts = await getCollection("blog");
  const postPaths = posts.map(
    (post) => `/blog/${createSlug(post.data.title, post.slug)}/`,
  );

  const urls = [...staticPaths, ...postPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
