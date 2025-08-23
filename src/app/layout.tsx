import {NextIntlClientProvider} from 'next-intl';
import {Playfair_Display, Roboto} from "next/font/google";
import type {Metadata} from "next";


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

export default async function RootLayout({children}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
          className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>);
}