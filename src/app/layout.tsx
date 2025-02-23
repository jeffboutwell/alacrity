import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "./components/footer";
import { Geist } from "next/font/google";
import Header from "./components/header";
import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Alacrity",
  description: "Alacrity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
