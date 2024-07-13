import { Roboto, Noto_Sans_Thai } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  fallback: ["Noto Sans Thai", "system-ui", "arial"],
});

export const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});
