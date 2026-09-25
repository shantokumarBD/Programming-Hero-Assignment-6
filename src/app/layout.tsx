import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "FitLog - Train with intent",
  description: "FitLog is a dark, no-nonsense gym companion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${oswald.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#111827] text-white antialiased">
        <Navbar></Navbar>
        <main className="">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
