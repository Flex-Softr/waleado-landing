/** A guide is plain data so it renders as fast static HTML and feeds the sitemap, JSON-LD and llms.txt. */
export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string };

export type Guide = {
  slug: string;
  title: string;
  /** Meta description and card summary (about 150 characters). */
  description: string;
  category: string;
  readMinutes: number;
  /** ISO date of the last meaningful update. */
  updated: string;
  takeaways: string[];
  sections: { id: string; heading: string; blocks: GuideBlock[] }[];
  faq: { q: string; a: string }[];
  /** Slug of the feature page this guide promotes. */
  relatedModule?: string;
};
