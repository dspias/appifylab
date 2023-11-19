import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: "A feed creation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
