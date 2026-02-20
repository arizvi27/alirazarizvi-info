import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Raza Rizvi | Personal Site",
  description: "Engineer & builder — portfolio and writing"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
