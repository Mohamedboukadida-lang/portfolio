import { ImageResponse } from "next/og";

export const alt = "Mohamed Boukadida, backend and software engineer in Passau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f3f6f7",
        color: "#102029",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#08384a" }}>
        Backend / Software Engineer
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.02,
          }}
        >
          Mohamed Boukadida
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#3d4e5c",
          }}
        >
          APIs, microservices, and DevOps · Passau
        </div>
      </div>
    </div>,
    { ...size },
  );
}
