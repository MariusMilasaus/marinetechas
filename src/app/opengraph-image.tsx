import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #06263d 0%, #0C5588 60%, #16AFD1 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: -2, display: "flex" }}>
          <span style={{ color: "white" }}>Marine</span>
          <span style={{ color: "#16AFD1" }}>TECH</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#cfe9f4",
          }}
        >
          Inžineriniai sprendimai laivynui ir pramonei
        </div>
      </div>
    ),
    { ...size }
  );
}
