import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/footer";
import {Navbar} from "@/components/global/navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desa Toyomarto",
  description: "Website Desa Toyomarto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        {/*<Navbar />*/}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
