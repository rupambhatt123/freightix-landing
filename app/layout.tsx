import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FREIGHTIX | Global Logistics Solutions",
  description:
    "Connecting businesses worldwide with seamless transportation, freight and supply chain solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} antialiased bg-white text-[#071626]`}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}