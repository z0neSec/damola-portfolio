import { ImageResponse } from "next/og";

export const alt = "Adedolapo Ademola, RN | Medical Virtual Assistant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1F1C",
          color: "#F4F0E8",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#A9D3C3" }}>
          MEDICAL VIRTUAL ASSISTANT · REMOTE
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1.02 }}>
          <span>Remote admin support</span>
          <span style={{ color: "#A9D3C3" }}>from a Registered Nurse.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32 }}>Adedolapo Ademola, RN</div>
      </div>
    ),
    size,
  );
}
