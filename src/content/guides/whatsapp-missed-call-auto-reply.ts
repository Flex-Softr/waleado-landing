import type { Guide } from "./types";

export const guide: Guide = {
  slug: "whatsapp-missed-call-auto-reply",
  title: "WhatsApp missed call auto-reply: a complete guide",
  description:
    "Stop losing leads when you cannot pick up. How a missed-call auto-reply on WhatsApp works, what to write and how to set it up.",
  category: "Lead capture",
  readMinutes: 5,
  updated: "2026-11-10",
  relatedModule: "whatsapp-missed-call-auto-reply",
  takeaways: [
    "A missed call is often a ready buyer. Reply within seconds.",
    "Apologise, say when you will call back and invite them to chat.",
    "Use different messages for business hours and after hours.",
  ],
  sections: [
    {
      id: "why-it-matters",
      heading: "Why missed calls cost you sales",
      blocks: [
        {
          type: "p",
          text: "Someone who calls you usually wants to buy or needs help now. If nobody answers, they often call the next business on their list. An instant WhatsApp message keeps the conversation going even when you are busy.",
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How a missed-call auto-reply works",
      blocks: [
        {
          type: "ol",
          items: [
            "A customer calls your WhatsApp number.",
            "You do not answer in time.",
            "Waleado notices the missed call and sends your saved message right away.",
            "The customer replies in chat and you continue from the inbox.",
          ],
        },
      ],
    },
    {
      id: "what-to-write",
      heading: "What to write",
      blocks: [
        { type: "p", text: "Keep it friendly, short and useful. A good message:" },
        {
          type: "ul",
          items: [
            "Says sorry for missing the call.",
            "Invites them to write their question here.",
            "Shares something useful, like a price list or your hours.",
            "Says when you will call back if needed.",
          ],
        },
        {
          type: "tip",
          text: 'Example: "Sorry we missed your call! Write your question here and we will reply soon. Our price list is attached."',
        },
      ],
    },
    {
      id: "set-it-up",
      heading: "Set it up in Waleado",
      blocks: [
        {
          type: "ol",
          items: [
            "Connect your WhatsApp number.",
            "Open Call responder and create a rule.",
            "Write your message and attach a file if you like.",
            "Turn the rule on for the number.",
          ],
        },
        { type: "p", text: "The missed-call responder is part of the Pro and Business plans." },
      ],
    },
  ],
  faq: [
    {
      q: "Does the customer need to save my number?",
      a: "No. The message goes to the person who called you.",
    },
    {
      q: "Can I use different replies for different numbers?",
      a: "Yes. Each connected number can have its own missed-call rules.",
    },
  ],
};
