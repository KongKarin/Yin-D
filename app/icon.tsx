import { ImageResponse } from "next/og";
import logo from "@/public/logo/logo-favicon.svg";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const logoUrl = `${baseUrl}${logo.src}`;

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element

      // eslint-disable-next-line @next/next/no-img-element
      <img src={logoUrl} alt={"Yin-D"} width={32} height={32} />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
