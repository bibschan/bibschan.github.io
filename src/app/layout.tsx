import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibi's portfolio",
  description:
    "I call this a portfolio site, but really I just needed an excuse to create something fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col w-[360px] m-auto justify-center">
        {children}
      </body>
    </html>
  );
}
