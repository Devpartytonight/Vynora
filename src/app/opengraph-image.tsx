import { ImageResponse } from "next/og";

export const alt = "Vynora Technologies: software development agency in Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#eceef6",
          background:
            "radial-gradient(circle at 85% 10%, rgba(124,92,255,0.55), transparent 45%), radial-gradient(circle at 5% 100%, rgba(34,211,238,0.35), transparent 45%), #07080d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32">
              <path d="M7 9l9 16 9-16" stroke="#07080d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, display: "flex" }}>
            Vynora<span style={{ color: "#9aa0b8", fontWeight: 400, marginLeft: 10 }}>Technologies</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, display: "flex", flexWrap: "wrap" }}>
            We build software that scales with your ambition.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#9aa0b8", display: "flex" }}>
            Web · Mobile · Cloud · Data · AI
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#22d3ee" }}>
          <span>Software development agency · Dubai, UAE</span>
          <span>vynora.tech</span>
        </div>
      </div>
    ),
    size,
  );
}
