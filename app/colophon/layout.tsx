import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function ColophonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <main
      className={`
        ${inter.className}
        w-full px-2 mx-auto mt-[1.5rem] mb-12 container
    `}>{children}</main>
    
  );
}
