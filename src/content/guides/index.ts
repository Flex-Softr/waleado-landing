import type { Guide } from "./types";
import { guide as bulkMessages } from "./bulk-whatsapp-messages-without-ban";
import { guide as autoReply } from "./whatsapp-auto-reply-setup";
import { guide as missedCall } from "./whatsapp-missed-call-auto-reply";

export type { Guide, GuideBlock } from "./types";

/** Newest first. To publish a guide, add its file here. */
export const GUIDES: Guide[] = [bulkMessages, autoReply, missedCall];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guidesForModule(moduleSlug: string): Guide[] {
  return GUIDES.filter((g) => g.relatedModule === moduleSlug);
}
