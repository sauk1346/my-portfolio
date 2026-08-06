import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #18181b, #27272a)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 140,
            height: 140,
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #2563eb, #9333ea)",
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          AM
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "white" }}>
          Antonio Morales
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a1a1aa", marginTop: 12 }}>
          Desarrollador Web Fullstack
        </div>
      </div>
    ),
    size
  );
}
