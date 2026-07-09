import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "aryan-vashishth.ts — full-stack engineer & agentic AI builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TABS = ["home.ts", "skills.ts", "experience.ts", "projects.ts", "contact.ts"];
const ART = [
  "/=====================/----------------/  /++++++++++++++/",
  "/                     /                /  /              /",
  "/    /----------/     /   /********/  /  /   /========/  /",
  "/    /          /     /   /        /  /  /   /        /  /",
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#272727",
          fontFamily: "monospace",
        }}
      >
        {/* editor tab strip */}
        <div
          style={{
            display: "flex",
            background: "#1d1d1d",
            borderBottom: "1px solid #151515",
            padding: "0 24px",
          }}
        >
          {TABS.map((t, i) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "18px 26px",
                fontSize: 22,
                color: i === 0 ? "#efefef" : "#8d8d8d",
                background: i === 0 ? "#272727" : "transparent",
                borderBottom: i === 0 ? "4px solid #6a93ff" : "4px solid transparent",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* buffer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: "48px 72px 44px",
            position: "relative",
          }}
        >
          {/* ascii texture */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 72,
              display: "flex",
              flexDirection: "column",
              color: "#454545",
              fontSize: 24,
              lineHeight: 1.5,
            }}
          >
            {ART.map((line, i) => (
              <div key={i} style={{ display: "flex", whiteSpace: "pre" }}>
                {line}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 118,
                fontWeight: 700,
                color: "#d6d6d6",
                letterSpacing: -5,
                fontFamily: "sans-serif",
              }}
            >
              Aryan Vashishth
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 38,
                color: "#9a9a9a",
                marginTop: 10,
                fontFamily: "sans-serif",
              }}
            >
              Full-stack engineer & agentic AI builder
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#6a93ff",
                marginTop: 42,
              }}
            >
              / github.com/Aryanz01 · Bangalore (IN) · realtime backends · voice
              infra · multi-LLM
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
