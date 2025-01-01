import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Oliver Fogelin",
  description: "Computer Science Student at the University of Cambridge. Love making stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
