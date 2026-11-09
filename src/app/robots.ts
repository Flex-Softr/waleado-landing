import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

/** Everything is public, including for AI crawlers, so assistants can read and cite the site. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
