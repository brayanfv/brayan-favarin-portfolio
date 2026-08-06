import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#09090B",
          border: "1px solid #27272A",
          color: "#FAFAFA",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 24,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          width: "100%",
        }}
      >
        <span>BF</span>
        <span style={{ color: "#9B87F5" }}>.</span>
      </div>
    ),
    size,
  );
}
