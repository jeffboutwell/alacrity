import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Footer from "./components/footer";
import Header from "./components/header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
      <body className={`${openSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
