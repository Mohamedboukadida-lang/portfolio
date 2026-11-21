import { ImageResponse } from "next/og";

export const alt = "Mohamed Boukadida, backend developer in Passau";
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
        backgroundColor: "#070b10",
        color: "#eef6f4",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#5eead4" }}>
        Backend developer · process automation
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 0.9,
          }}
        >
          <span>Mohamed</span>
          <span>Boukadida</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            width: 96,
            height: 4,
            backgroundColor: "#5eead4",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#8ea39d",
          }}
        >
          Application management and process automation · Passau
        </div>
      </div>
    </div>,
    { ...size },
  );
}
