import type { Guide } from "./types";

export const guide: Guide = {
  slug: "bulk-whatsapp-messages-without-ban",
  title: "How to send bulk WhatsApp messages without getting banned",
  description:
    "A practical checklist for sending offers and updates to many customers on WhatsApp while keeping your number safe.",
  category: "Bulk messaging",
  readMinutes: 7,
  updated: "2026-11-10",
  relatedModule: "bulk-whatsapp-campaigns",
  takeaways: [
    "Message only people who agreed to hear from you, and make it easy to opt out.",
    "Start slowly on a new number and grow the volume over a few weeks.",
    "Add random gaps between messages and vary the wording.",
    "Split large campaigns across several numbers.",
    "Watch for blocks and reports, and pause when they rise.",
  ],
  sections: [
    {
      id: "why-numbers-get-banned",
      heading: "Why WhatsApp restricts numbers",
      blocks: [
        {
          type: "p",
          text: "WhatsApp protects its users from spam. When a number behaves like a spammer, WhatsApp may limit or ban it. The usual signals are many messages to people who never saved your number, the same text sent again and again, very fast sending, and people who block or report you.",
        },
        {
          type: "p",
          text: "So the goal is simple: make your campaigns look and feel like normal, wanted conversations.",
        },
      ],
    },
    {
      id: "build-an-opt-in-list",
      heading: "1. Message people who want to hear from you",
      blocks: [
        {
          type: "p",
          text: "Use numbers from customers who bought from you, filled in a form or messaged you first. Tell them they will get updates on WhatsApp.",
        },
        {
          type: "ul",
          items: [
            'Add a checkbox like "Send me offers on WhatsApp" to your checkout or form.',
            "Ask new customers to save your number.",
            'End campaigns with a line such as "Reply STOP to unsubscribe" and respect it.',
          ],
        },
      ],
    },
    {
      id: "warm-up-new-numbers",
      heading: "2. Warm up new numbers",
      blocks: [
        {
          type: "p",
          text: "A brand-new number that suddenly sends hundreds of messages is a red flag. Use it for normal chats for a while first. Then start with small campaigns to your most active customers and increase the size step by step over a few weeks.",
        },
        {
          type: "tip",
          text: "WhatsApp does not publish a safe daily number. Start small, watch how people respond and grow slowly.",
        },
      ],
    },
    {
      id: "slow-down-and-vary",
      heading: "3. Slow down and vary your messages",
      blocks: [
        {
          type: "p",
          text: "People do not send 500 messages in a minute, so your campaigns should not either. Leave a random gap between messages. Write a few versions of the same offer and use each customer's name.",
        },
        {
          type: "ul",
          items: [
            "Use random delays, for example a few minutes between messages.",
            "Prepare three to five wording variants of the same message.",
            "Personalise with the customer's name.",
            "Avoid sending only a link in the first message.",
          ],
        },
      ],
    },
    {
      id: "spread-across-numbers",
      heading: "4. Spread large campaigns across numbers",
      blocks: [
        {
          type: "p",
          text: "If your list is large, connect two or more numbers and split the campaign between them. Each number then sends a smaller, more natural amount.",
        },
      ],
    },
    {
      id: "respect-quiet-hours",
      heading: "5. Respect quiet hours",
      blocks: [
        {
          type: "p",
          text: "Messages at 2am annoy people and lead to reports. Send during the day in your customer's time zone and pause at night.",
        },
      ],
    },
    {
      id: "watch-the-signals",
      heading: "6. Watch the warning signs",
      blocks: [
        {
          type: "p",
          text: "If many people stop replying, block you or report you, pause the campaign. Review your list and your message before sending again. Fewer, better-targeted messages almost always work better.",
        },
      ],
    },
    {
      id: "do-it-with-waleado",
      heading: "How Waleado helps",
      blocks: [
        {
          type: "p",
          text: "Waleado has these safeguards built into every campaign, so you do not need to manage them by hand:",
        },
        {
          type: "ul",
          items: [
            "Random delays between messages that you control.",
            "AI-written message variants.",
            "Number rotation across your connected numbers.",
            "Quiet hours in the customer's time zone.",
            "Pause and resume at any time.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "How many WhatsApp messages can I send per day?",
      a: "WhatsApp does not publish a fixed limit for regular accounts. It depends on your number's age, history and how people react to your messages. Start small and increase slowly.",
    },
    {
      q: "Is bulk messaging allowed on WhatsApp?",
      a: "Messaging customers who agreed to hear from you is normal business use. Unwanted mass messages break WhatsApp's terms and are the main reason numbers get banned.",
    },
    {
      q: "Does using the WhatsApp Business app make me safe?",
      a: "It helps people recognise you as a business, but the same rules apply. Consent, pacing and good content matter most.",
    },
  ],
};
