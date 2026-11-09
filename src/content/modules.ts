/**
 * Product modules shown on /features and their own pages (/features/[slug]).
 * Copy is plain English for a global audience; plan notes follow the default plan limits.
 */

export type ModuleGroup =
  "Numbers" | "Messaging" | "Audience" | "Automation" | "Conversations" | "Developers";

export type ModuleIconName =
  | "smartphone"
  | "send"
  | "zap"
  | "file-text"
  | "users"
  | "user-plus"
  | "reply"
  | "sparkles"
  | "workflow"
  | "inbox"
  | "phone-missed"
  | "code";

export type Integration = {
  name: string;
  status: "available" | "coming-soon";
  summary: string;
  features: string[];
};

export type ProductModule = {
  slug: string;
  name: string;
  group: ModuleGroup;
  icon: ModuleIconName;
  /** One line for cards. */
  tagline: string;
  /** Two or three sentences for the tab panel and page intro. */
  summary: string;
  /** Short highlights for the tab panel. */
  highlights: string[];
  /** Which plans include it. */
  plans: string;
  /** Lines for the small product preview. */
  preview: string[];
  /** Module page: what you can do. */
  details: { title: string; text: string }[];
  /** Module page: how to start. */
  steps: string[];
  faq: { q: string; a: string }[];
  seo: { title: string; description: string };
  integrations?: Integration[];
};

export const MODULE_GROUPS: ModuleGroup[] = [
  "Numbers",
  "Messaging",
  "Audience",
  "Automation",
  "Conversations",
  "Developers",
];

export const MODULES: ProductModule[] = [
  {
    slug: "multiple-whatsapp-numbers",
    name: "Multi-number hub",
    group: "Numbers",
    icon: "smartphone",
    tagline: "Connect several WhatsApp numbers to one account.",
    summary:
      "Link your personal or WhatsApp Business numbers with a QR scan and manage them all from one dashboard. Waleado watches every connection and tells you when one needs attention.",
    highlights: [
      "Connect by scanning a QR code",
      "Personal and Business app numbers",
      "Alerts when a number disconnects",
      "Pick a default number for sending",
    ],
    plans: "All plans · 1 number on Free, up to 15 on Business",
    preview: [
      "Sales line · Connected",
      "Support line · Connected",
      "Campaign line · Scan again to reconnect",
    ],
    details: [
      {
        title: "Connect in seconds",
        text: "Open WhatsApp on your phone, scan the QR code and the number is ready. No Meta approval and no new SIM needed.",
      },
      {
        title: "Every number in one place",
        text: "See which numbers are online, which one sends by default and which one needs a new scan.",
      },
      {
        title: "Use numbers together",
        text: "Share a big campaign across several numbers so each one sends a smaller, safer amount.",
      },
      {
        title: "Stay informed",
        text: "Get a notification when a number disconnects, so campaigns and auto-replies do not stop silently.",
      },
    ],
    steps: [
      "Open Devices and click Add number.",
      "Scan the QR code with WhatsApp on your phone.",
      "Choose a name and set it as default if you like.",
    ],
    faq: [
      {
        q: "Can I connect a normal WhatsApp number?",
        a: "Yes. Both the regular WhatsApp app and the WhatsApp Business app work.",
      },
      {
        q: "Does my phone need to stay online?",
        a: "Your phone only needs to be online now and then, the same as with WhatsApp Web linked devices.",
      },
    ],
    seo: {
      title: "Manage multiple WhatsApp numbers from one dashboard",
      description:
        "Connect several WhatsApp numbers with a QR scan and manage campaigns, auto-replies and chats for all of them in one place.",
    },
  },
  {
    slug: "bulk-whatsapp-campaigns",
    name: "Bulk campaigns",
    group: "Messaging",
    icon: "send",
    tagline: "Send offers and updates to your whole contact list.",
    summary:
      "Send one message to thousands of contacts with their names filled in, photos or files attached and safe pacing built in. Schedule it for later, pause it or resume it any time.",
    highlights: [
      "Personal names and custom fields",
      "Images, video, audio and documents",
      "Random delays and AI message variants",
      "Schedule, pause and resume",
    ],
    plans: "All plans · scheduling on Pro and Business",
    preview: [
      "Campaign: Weekend offer · 64% sent",
      "Sharing across 3 numbers · 150–200s gaps",
      "Quiet hours 10pm–9am in the customer's time zone",
    ],
    details: [
      {
        title: "Personal messages at scale",
        text: "Use the contact's name and other fields so every message reads like it was written for one person.",
      },
      {
        title: "Rich media",
        text: "Attach product photos, videos, voice notes or PDF catalogues to any campaign.",
      },
      {
        title: "Safer sending",
        text: "Random gaps, several wording variants and number rotation make your sending look natural.",
      },
      {
        title: "Full control",
        text: "Schedule a start time, set quiet hours, pause a running campaign and see who received it.",
      },
    ],
    steps: [
      "Choose a contact group.",
      "Write your message or pick a template, then add media.",
      "Set delays and start now or schedule it.",
    ],
    faq: [
      {
        q: "How many messages can I send?",
        a: "It depends on your plan's monthly limit. Free sends up to 50 messages a day; paid plans send thousands a month.",
      },
      {
        q: "Can my number get banned?",
        a: "Every WhatsApp automation carries some risk. Waleado lowers it with delays, variants, rotation and quiet hours. Follow our safe sending guide too.",
      },
    ],
    seo: {
      title: "Bulk WhatsApp campaigns with safe sending",
      description:
        "Send personalised bulk WhatsApp messages with media, scheduling, random delays, AI variants and number rotation.",
    },
  },
  {
    slug: "quick-send",
    name: "Quick send",
    group: "Messaging",
    icon: "zap",
    tagline: "Send one message to one person in seconds.",
    summary:
      "Send a one-off text, template or file to any number without saving the contact first. Handy for order confirmations and quick follow-ups.",
    highlights: [
      "Text, template or media",
      "Any number, no saving needed",
      "Choose which number sends it",
      "See if it was delivered",
    ],
    plans: "All plans",
    preview: ["To: +1 555 0100", "Template: Order confirmed", "Sent from: Sales line"],
    details: [
      {
        title: "No contact needed",
        text: "Type any number with its country code and send right away.",
      },
      {
        title: "Reuse your templates",
        text: "Pick a saved template so confirmations and replies always look the same.",
      },
      { title: "Send files", text: "Attach invoices, photos or documents in the same message." },
      {
        title: "Choose the sender",
        text: "Decide which of your connected numbers sends the message.",
      },
    ],
    steps: ["Open Quick send.", "Enter the number and write or pick a message.", "Click Send."],
    faq: [
      {
        q: "Do I need to save the contact first?",
        a: "No. Enter the number with its country code and send.",
      },
    ],
    seo: {
      title: "Send a WhatsApp message without saving the number",
      description:
        "Send one-off WhatsApp texts, templates and files to any number from your browser, without saving the contact.",
    },
  },
  {
    slug: "whatsapp-message-templates",
    name: "Message templates",
    group: "Messaging",
    icon: "file-text",
    tagline: "Save your best messages and reuse them anywhere.",
    summary:
      "Keep ready-made messages with media for offers, greetings and replies, then use them in campaigns, quick sends and automations.",
    highlights: [
      "Text with images, video or files",
      "Variables like {name}",
      "Use them anywhere in Waleado",
      "Turn templates on or off",
    ],
    plans: "All plans · 5 on Free, 50 on Starter, unlimited on Pro",
    preview: [
      "Welcome message · Text",
      "New arrivals · Image and text",
      "Payment reminder · Document",
    ],
    details: [
      {
        title: "Write once",
        text: "Save greetings, price lists and reminders so you never retype them.",
      },
      {
        title: "Personalise",
        text: "Add variables such as the customer's name, filled in automatically.",
      },
      { title: "Add media", text: "Attach images, videos, audio or documents to any template." },
      {
        title: "Use everywhere",
        text: "Templates work in campaigns, quick send, auto-replies and chatbots.",
      },
    ],
    steps: [
      "Open Templates and click New.",
      "Write the text and add media or variables.",
      "Save it and use it anywhere.",
    ],
    faq: [
      {
        q: "Do templates need Meta approval?",
        a: "No. Waleado templates are your own saved messages and do not need approval.",
      },
    ],
    seo: {
      title: "WhatsApp message templates with media",
      description:
        "Save reusable WhatsApp message templates with images, files and variables, and use them in campaigns and automations.",
    },
  },
  {
    slug: "whatsapp-contact-manager",
    name: "Contacts and groups",
    group: "Audience",
    icon: "users",
    tagline: "Organise contacts and check who is on WhatsApp.",
    summary:
      "Import contacts from Excel or CSV, or paste numbers. Sort them into groups and see which numbers have WhatsApp before you send.",
    highlights: [
      "Import Excel, CSV or pasted lists",
      "Groups for targeted campaigns",
      "Check which numbers have WhatsApp",
      "Edit and clean up in bulk",
    ],
    plans: "All plans · 500 contacts on Free",
    preview: [
      "VIP customers · 1,240 contacts",
      "On WhatsApp 1,180 · Not on WhatsApp 60",
      "Imported from customers.xlsx",
    ],
    details: [
      {
        title: "Easy import",
        text: "Upload an Excel or CSV file, or simply paste a list of numbers.",
      },
      {
        title: "Groups",
        text: "Split your audience into groups like buyers, leads or VIPs and send to the right people.",
      },
      {
        title: "Number check",
        text: "See which numbers are valid WhatsApp accounts so you do not waste messages.",
      },
      {
        title: "Clean lists",
        text: "Remove duplicates and invalid numbers to keep your campaigns healthy.",
      },
    ],
    steps: [
      "Open Contacts and create a group.",
      "Import a file or paste numbers.",
      "Check the numbers and start a campaign.",
    ],
    faq: [
      {
        q: "Which file types can I import?",
        a: "Excel (.xlsx) and CSV files, or you can paste numbers directly.",
      },
    ],
    seo: {
      title: "WhatsApp contact manager with number check",
      description:
        "Import contacts from Excel or CSV, organise them into groups and check which numbers are on WhatsApp.",
    },
  },
  {
    slug: "whatsapp-group-grabber",
    name: "Group grabber",
    group: "Audience",
    icon: "user-plus",
    tagline: "Collect members from groups you belong to.",
    summary:
      "Pull member numbers from WhatsApp groups you are part of and save them as a contact group, ready for follow-up.",
    highlights: [
      "Lists the groups on your number",
      "Export members in one click",
      "Save straight into contacts",
      "Skips duplicates",
    ],
    plans: "Pro and Business",
    preview: [
      "Local resellers · 212 members",
      "Wholesale buyers · 98 members",
      "Saved to group: Leads",
    ],
    details: [
      {
        title: "See your groups",
        text: "Waleado lists every group your connected number belongs to.",
      },
      { title: "One-click export", text: "Pick a group and save its members as a contact group." },
      { title: "No duplicates", text: "Numbers you already have are skipped automatically." },
      { title: "Use responsibly", text: "Only message people who would expect to hear from you." },
    ],
    steps: ["Open Group grabber.", "Choose a group.", "Save the members to a contact group."],
    faq: [
      {
        q: "Can I grab members from any group?",
        a: "Only from groups your connected number is a member of.",
      },
    ],
    seo: {
      title: "WhatsApp group grabber: export group members",
      description:
        "Export member numbers from WhatsApp groups you belong to and save them as contacts in one click.",
    },
  },
  {
    slug: "whatsapp-auto-reply",
    name: "Auto-replies",
    group: "Automation",
    icon: "reply",
    tagline: "Answer common questions instantly, day and night.",
    summary:
      "Set rules that reply when a message matches your keywords. Match exact words, words it contains, how it starts or an advanced pattern, and reply with text or media.",
    highlights: [
      "Exact, contains, starts with or pattern",
      "Reply with text, media or a template",
      "Turn rules on per number",
      "Let AI answer when no rule matches",
    ],
    plans: "All plans · 3 rules on Free, unlimited on paid plans",
    preview: [
      '"price" → Price list (PDF)',
      '"location" → Shop address and map',
      '"hi" → Welcome message',
    ],
    details: [
      {
        title: "Keyword rules",
        text: "Reply when a message is exactly a word, contains it, starts with it or matches a pattern.",
      },
      { title: "Rich replies", text: "Answer with text, images, files or a saved template." },
      { title: "Per number", text: "Each connected number can have its own set of rules." },
      {
        title: "AI fallback",
        text: "When no rule fits, the AI agent can answer instead (Pro and Business).",
      },
    ],
    steps: [
      "Open Auto-reply and click New rule.",
      "Add keywords and choose how they match.",
      "Write the reply and switch it on.",
    ],
    faq: [
      {
        q: "Will it reply to every message?",
        a: "Only to messages that match your rules, unless you turn on the AI fallback.",
      },
    ],
    seo: {
      title: "WhatsApp auto reply with keywords and AI",
      description:
        "Reply to WhatsApp messages automatically with keyword rules, media replies and an optional AI fallback.",
    },
  },
  {
    slug: "whatsapp-ai-agent",
    name: "AI agent",
    group: "Automation",
    icon: "sparkles",
    tagline: "An AI assistant that knows your business.",
    summary:
      "Teach the AI about your products, services and rules, then let it answer customers in a natural way. Connect your own OpenAI or Gemini key.",
    highlights: [
      "Learns your business details",
      "Works with OpenAI or Gemini",
      "Remembers the conversation",
      "Rewrites campaign messages",
    ],
    plans: "Pro and Business",
    preview: [
      "Customer: Do you deliver on weekends?",
      "AI: Yes, weekend orders arrive within 2 days.",
      "Skill: Store assistant",
    ],
    details: [
      {
        title: "Your knowledge",
        text: "Describe your services, prices and policies once. The AI uses them in every answer.",
      },
      {
        title: "Your AI provider",
        text: "Use your own OpenAI or Google Gemini key and pick the model.",
      },
      {
        title: "Natural chats",
        text: "The AI keeps the context of the conversation, so customers can ask follow-up questions.",
      },
      {
        title: "Better campaigns",
        text: "Let AI write several versions of a campaign message for safer sending.",
      },
    ],
    steps: [
      "Add your OpenAI or Gemini key.",
      "Create an AI skill with your business details.",
      "Connect it to an auto-reply rule.",
    ],
    faq: [
      {
        q: "Do I need my own AI key?",
        a: "Yes. You connect your own OpenAI or Gemini key, so you control the cost and the model.",
      },
      {
        q: "Can it give wrong answers?",
        a: "AI can make mistakes. Keep your business details clear and review chats in the inbox.",
      },
    ],
    seo: {
      title: "WhatsApp AI agent for customer replies",
      description:
        "Answer customers on WhatsApp with an AI agent trained on your business, using your own OpenAI or Gemini key.",
    },
  },
  {
    slug: "whatsapp-chatbot-builder",
    name: "Chatbot builder",
    group: "Automation",
    icon: "workflow",
    tagline: "Build guided menus and flows visually.",
    summary:
      "Design step-by-step conversations in a visual editor: ask questions, branch on answers and send media, so customers get help without waiting.",
    highlights: [
      "Drag-and-drop flow editor",
      "Questions, buttons and conditions",
      "Send text, images, video or files",
      "Start a flow from a keyword",
    ],
    plans: "Starter and up · 3 flows on Starter, unlimited on Pro",
    preview: [
      "Start → Main menu",
      "1 Order status → ask for order number",
      "2 Talk to us → hand over to the inbox",
    ],
    details: [
      {
        title: "Visual editor",
        text: "Drag blocks onto a canvas and connect them. No code needed.",
      },
      {
        title: "Ask and branch",
        text: "Ask a question, offer buttons and send people down different paths.",
      },
      { title: "Media in flows", text: "Share images, videos, audio and documents at any step." },
      { title: "Start on a keyword", text: 'Launch a flow when someone sends a word like "menu".' },
    ],
    steps: [
      "Open Chatbot and create a flow.",
      "Add steps and connect them.",
      "Set the start keyword and activate it.",
    ],
    faq: [
      {
        q: "Can a chatbot hand over to a person?",
        a: "Yes. End a flow by handing the chat over to you in the inbox.",
      },
    ],
    seo: {
      title: "No-code WhatsApp chatbot builder",
      description:
        "Build WhatsApp chatbots with a visual drag-and-drop editor: menus, questions, conditions and media.",
    },
  },
  {
    slug: "whatsapp-live-chat-inbox",
    name: "Live chat inbox",
    group: "Conversations",
    icon: "inbox",
    tagline: "Every chat from every number, in one place.",
    summary:
      "Reply to customers from your browser instead of juggling phones. Chats from all your numbers sit in one inbox with full media support.",
    highlights: [
      "All numbers in one inbox",
      "Text, images, voice and files",
      "Start new chats from the browser",
      "Rename and organise chats",
    ],
    plans: "All plans",
    preview: [
      "Customer A · Is the blue one in stock?",
      "Customer B · Thanks, received!",
      "Missed call · Auto-reply sent",
    ],
    details: [
      { title: "One inbox", text: "Chats from all your connected numbers appear together." },
      {
        title: "Work from a computer",
        text: "Type faster on a keyboard and keep your phone free.",
      },
      { title: "Full media", text: "Send and receive images, voice notes, videos and documents." },
      {
        title: "Stay organised",
        text: "Rename chats and start new conversations from the browser.",
      },
    ],
    steps: ["Connect a number.", "Open Live chat.", "Reply from your browser."],
    faq: [
      {
        q: "Can several people use one account?",
        a: "Today one login manages the inbox. Team members with their own logins are on our roadmap.",
      },
    ],
    seo: {
      title: "WhatsApp live chat inbox for all your numbers",
      description:
        "Answer WhatsApp chats from all your numbers in one browser inbox with images, voice notes and files.",
    },
  },
  {
    slug: "whatsapp-missed-call-auto-reply",
    name: "Missed-call responder",
    group: "Conversations",
    icon: "phone-missed",
    tagline: "Turn missed calls into conversations.",
    summary:
      "When someone calls your WhatsApp and you cannot pick up, Waleado sends them a message right away so the lead does not go cold.",
    highlights: [
      "Instant reply after a missed call",
      "Text, media or template replies",
      "Different rules per number",
      "Works around the clock",
    ],
    plans: "Pro and Business",
    preview: [
      "Missed call from +1 555 0123",
      "Sent: Sorry we missed you. Reply here.",
      "Rule: Business hours message",
    ],
    details: [
      {
        title: "Never miss a lead",
        text: "Every missed WhatsApp call gets an instant, friendly message.",
      },
      {
        title: "Your message",
        text: "Reply with text, a template or a file such as your price list.",
      },
      {
        title: "Per number rules",
        text: "Set different replies for your sales and support numbers.",
      },
      { title: "24/7", text: "It keeps working at night and on holidays." },
    ],
    steps: ["Open Call responder.", "Write your reply.", "Turn it on for a number."],
    faq: [
      {
        q: "Does it reject the call?",
        a: "It sends a message when a call is missed so the customer can continue by chat.",
      },
    ],
    seo: {
      title: "WhatsApp missed call auto reply",
      description:
        "Automatically send a WhatsApp message when you miss a call, so every caller gets a quick answer.",
    },
  },
  {
    slug: "whatsapp-api-and-integrations",
    name: "API and integrations",
    group: "Developers",
    icon: "code",
    tagline: "Send WhatsApp messages from your own apps.",
    summary:
      "Use the REST API to send OTPs, order updates and alerts from your website or software, or install our ready-made WHMCS module for hosting businesses.",
    highlights: [
      "Simple REST API with keys",
      "WHMCS module with WhatsApp OTP login",
      "Clear API documentation",
      "WordPress and WooCommerce plugin (coming soon)",
    ],
    plans: "Starter and up",
    preview: [
      "POST /v1/messages/send",
      "WHMCS: invoice reminder sent",
      "WHMCS: login code 482913 sent",
    ],
    details: [
      {
        title: "REST API",
        text: "Create API keys in the dashboard and send messages from any language or platform.",
      },
      {
        title: "OTP and alerts",
        text: "Send login codes, order confirmations and system alerts in real time.",
      },
      {
        title: "WHMCS module",
        text: "Automatic invoice, service and ticket messages, plus WhatsApp two-factor login for WHMCS.",
      },
      { title: "More coming", text: "A WordPress and WooCommerce plugin is on the way." },
    ],
    steps: [
      "Create an API key in the dashboard.",
      "Read the API docs or install the WHMCS module.",
      "Send your first message.",
    ],
    faq: [
      { q: "Which plans include the API?", a: "Starter, Pro and Business." },
      {
        q: "Is there a WooCommerce plugin?",
        a: "It is coming soon. You can already use the API from any WordPress site.",
      },
    ],
    seo: {
      title: "WhatsApp API, WHMCS module and integrations",
      description:
        "Send WhatsApp messages from your apps with a simple REST API, and use the WHMCS module for invoices, tickets and WhatsApp OTP login.",
    },
    integrations: [
      {
        name: "WHMCS",
        status: "available",
        summary:
          "Keep hosting customers informed on WhatsApp and secure WHMCS logins with WhatsApp OTP.",
        features: [
          "New invoice, payment reminder, overdue and payment receipt messages",
          "WhatsApp two-factor login: 6-digit codes for client and admin logins",
          "Order, account creation, suspension and reactivation notices",
          "Support ticket updates when tickets open, get a reply or close",
          "Instant WhatsApp alerts to the admin for new signups and urgent tickets",
          "Template editor, message log and resend inside WHMCS",
        ],
      },
      {
        name: "WordPress and WooCommerce",
        status: "coming-soon",
        summary: "Order status messages, WhatsApp OTP login and a chat widget for your store.",
        features: [
          "Order status messages",
          "WhatsApp OTP login and signup",
          "Floating WhatsApp chat widget",
          "Form submission alerts",
        ],
      },
    ],
  },
];

export function getModule(slug: string): ProductModule | undefined {
  return MODULES.find((m) => m.slug === slug);
}
