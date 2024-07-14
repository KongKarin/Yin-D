import type { Metadata } from "next";
import "./globals.css";
import { notoSansThai, roboto } from "./font";
import ReturnToTopButton from "./(components)/utilities/returnToTopBtn";

export const metadata: Metadata = {
  title: {
    template: "%s | Yin - D",
    default: "Yin - D",
  },
  description: "The Yin - D | Warm welcome and be happy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  bg-yin-d-bg`}>
        {children}
        <ReturnToTopButton />
      </body>
    </html>
  );
}
