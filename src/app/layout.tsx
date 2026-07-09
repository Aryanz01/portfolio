import type { Metadata, Viewport } from "next";
import { Archivo, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Chrome from "@/components/Chrome";
import AsciiCanvas from "@/components/AsciiCanvas";
import { LINKS, SITE_URL } from "@/lib/data";

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aryan Vashishth — full-stack engineer & agentic AI builder",
    template: "%s — Aryan Vashishth",
  },
  description:
    "Full-stack engineer building realtime backends for AI-powered products: voice infrastructure, multi-LLM runtimes, and agent-safe write paths. Based in Bangalore, IN.",
};

export const viewport: Viewport = {
  themeColor: "#272727",
};

const themeInit = `(function(){var t='dark';try{var s=localStorage.getItem('av-theme');if(s==='light'||s==='dark')t=s}catch(e){}document.documentElement.dataset.theme=t})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Chrome />
        <div className="buffer">
          <AsciiCanvas />
          <main className="content">{children}</main>
          <footer className="foot" data-ascii-exclude>
            <span className="dim">
              {"/* Designed & built by Aryan Vashishth · Bangalore · 2026 */"}
            </span>
            <a href={LINKS.resume} target="_blank" rel="noreferrer">
              resume.pdf ↗
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
