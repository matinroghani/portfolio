import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/Header/page";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matin Roghani | Frontend Developer",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geist.className} min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased`}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
