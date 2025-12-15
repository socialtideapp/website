import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Social Tide - Connect Through Questions",
  description: "Bringing people together, one question at a time. Create groups where someone is randomly selected to ask a question. Meaningful conversations that flow naturally. Coming soon to iOS and Android.",
  keywords: ["social app", "questions", "connect", "groups", "mobile app", "iOS", "Android"],
  authors: [{ name: "Social Tide" }],
  openGraph: {
    title: "Social Tide - Connect Through Questions",
    description: "Bringing people together, one question at a time. Coming soon to iOS and Android.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Tide - Connect Through Questions",
    description: "Bringing people together, one question at a time. Coming soon to iOS and Android.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#088395",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
