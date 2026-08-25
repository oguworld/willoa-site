import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div style={{ position: "relative", width: 24, height: 24, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              top: 5,
              left: 0,
              width: 17,
              height: 17,
              borderRadius: "0 60% 60% 60%",
              transform: "rotate(-45deg)",
              background: "#6E8C52",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 5,
              left: 8,
              width: 17,
              height: 17,
              borderRadius: "0 60% 60% 60%",
              transform: "rotate(-45deg)",
              background: "#D9A94E",
              opacity: 0.9,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
