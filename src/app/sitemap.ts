import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/skills/", "/experience/", "/projects/", "/contact/"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : 0.8,
    })
  );
}
