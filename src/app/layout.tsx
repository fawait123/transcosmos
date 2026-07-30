import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INDODATA DEV - Data Center Solution",
  description: "Precision-driven operational excellence for mission-critical digital infrastructure",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
