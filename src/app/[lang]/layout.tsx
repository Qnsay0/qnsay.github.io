import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bartlomiej Klimek - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
