import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardik Sawhney | Software Engineer II (Frontend / Full-Stack)",
  description:
    "Software Engineer building high-performance web and mobile products, owning frontend architecture from zero to one with React, Next.js, React Native, and TypeScript.",
  keywords: [
    "Hardik Sawhney",
    "Software Engineer II",
    "Frontend Engineer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "GeekyAnts",
    "Bangalore",
  ],
  authors: [{ name: "Hardik Sawhney" }],
  creator: "Hardik Sawhney",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hardiksawhney.dev",
    title: "Hardik Sawhney | Software Engineer II (Frontend / Full-Stack)",
    description:
      "Software Engineer building high-performance web and mobile products, owning frontend architecture from zero to one with React, Next.js, React Native, and TypeScript.",
    siteName: "Hardik Sawhney Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik Sawhney | Software Engineer II",
    description:
      "Building high-performance web and mobile products, owning frontend architecture from zero to one.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FAFCFE] text-[#262C34] flex flex-col selection:bg-[#96C4F0]/30 selection:text-[#1A375A]">
        {children}
      </body>
    </html>
  );
}
