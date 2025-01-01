import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Oliver Fogelin",
  description: "CS Student at the University of Cambridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
