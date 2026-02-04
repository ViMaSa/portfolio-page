import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono, Fraunces, Dancing_Script } from "next/font/google";

const factsFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-facts',
  display: 'swap',
});

const storyFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-story',
  display: 'swap',
});

const accentScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Sarmiento",
  description: "Portfolio - facts and story modes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${factsFont.variable} ${storyFont.variable} ${accentScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
