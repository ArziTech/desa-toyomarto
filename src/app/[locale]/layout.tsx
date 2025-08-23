import "./globals.css";
import Footer from "@/components/global/footer";
import {Navbar} from "@/components/global/navbar";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <Navbar  />
        {children}
        <Footer />
     </>
  );
}
