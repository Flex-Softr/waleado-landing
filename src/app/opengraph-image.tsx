import { ImageResponse } from "next/og";

export const alt = "Waleado — WhatsApp marketing and automation software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The default social preview for every page that does not define its own. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #ffffff 0%, #ecfdf3 100%)",
        color: "#0b1220",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#047857",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
          </svg>
        </div>
        <div style={{ fontSize: 44, fontWeight: 800 }}>Waleado</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
          WhatsApp automation for businesses that sell on chat
        </div>
        <div style={{ fontSize: 30, color: "#475467" }}>
          Campaigns · Auto-replies · AI agent · Chatbots · Inbox · API
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#065f46", fontWeight: 700 }}>
        Free forever plan · waleado.app
      </div>
    </div>,
    size
  );
}
