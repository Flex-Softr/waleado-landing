import type { Guide } from "./types";

export const guide: Guide = {
  slug: "whatsapp-auto-reply-setup",
  title: "How to set up WhatsApp auto-reply for your business",
  description:
    "Answer customers instantly on WhatsApp: which auto-replies every business needs, how keyword rules work and when to use AI.",
  category: "Automation",
  readMinutes: 6,
  updated: "2026-11-10",
  relatedModule: "whatsapp-auto-reply",
  takeaways: [
    "Start with replies to the five questions customers ask most.",
    "Use keyword rules for clear questions like price or location.",
    "Keep replies short and end with a next step.",
    "Use AI for open questions once your basic rules work.",
  ],
  sections: [
    {
      id: "why-auto-reply",
      heading: "Why auto-replies matter",
      blocks: [
        {
          type: "p",
          text: "Customers on WhatsApp expect fast answers. If they wait hours, many will buy somewhere else. Auto-replies answer common questions in seconds, even at night, and free you up for the chats that need a person.",
        },
      ],
    },
    {
      id: "what-to-automate",
      heading: "1. Pick the questions to automate",
      blocks: [
        {
          type: "p",
          text: "Look at your recent chats and list the questions you answer again and again. Most businesses start with these:",
        },
        {
          type: "ul",
          items: [
            "Prices or a price list",
            "Location and opening hours",
            "Delivery time and cost",
            "How to order or pay",
            'A friendly welcome for "hi" or "hello"',
          ],
        },
      ],
    },
    {
      id: "keyword-rules",
      heading: "2. Understand keyword matching",
      blocks: [
        {
          type: "p",
          text: "A keyword rule sends a reply when a message matches words you choose. In Waleado you can match in four ways:",
        },
        {
          type: "ul",
          items: [
            'Exact: the whole message is the keyword, like "price".',
            'Contains: the keyword appears anywhere, like "what is the price?".',
            "Starts with: the message begins with the keyword.",
            "Pattern: an advanced rule for special formats such as order numbers.",
          ],
        },
        {
          type: "tip",
          text: '"Contains" catches the most messages. Use "exact" for short words that could appear by accident.',
        },
      ],
    },
    {
      id: "write-good-replies",
      heading: "3. Write replies people like",
      blocks: [
        {
          type: "ul",
          items: [
            "Keep it short: two or three lines.",
            'Answer first, then give a next step, like "Reply ORDER to buy".',
            "Attach a price list or photo when it helps.",
            "Say how to reach a person if the answer is not enough.",
          ],
        },
      ],
    },
    {
      id: "set-it-up",
      heading: "4. Set it up in Waleado",
      blocks: [
        {
          type: "ol",
          items: [
            "Connect your WhatsApp number by scanning the QR code.",
            "Open Auto-reply and click New rule.",
            "Add your keywords and choose how they should match.",
            "Write the reply, attach media if you like, and switch the rule on.",
            "Send the keyword from another phone to test it.",
          ],
        },
      ],
    },
    {
      id: "add-ai",
      heading: "5. Add AI for everything else",
      blocks: [
        {
          type: "p",
          text: "Keyword rules are perfect for clear questions. For open questions, an AI agent trained on your business details can answer in a natural way. In Waleado this is available on Pro and Business, using your own OpenAI or Gemini key.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Can I use auto-reply on a personal WhatsApp number?",
      a: "Yes. Waleado works with both the regular WhatsApp app and the WhatsApp Business app.",
    },
    {
      q: "Will auto-reply answer every message?",
      a: "Only messages that match your rules, unless you turn on the AI fallback.",
    },
    {
      q: "How many auto-reply rules can I create?",
      a: "Three on the Free plan and unlimited on paid plans.",
    },
  ],
};
