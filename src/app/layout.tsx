import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componet/nav/Navbar";
import { NextAuthProvider } from "@/componet/Providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Websirre",
  description:
    "Get real and practical web design inspiration from the internet’s best designed and highest-converting websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className=" bg-white">
            {/* <Navbar /> */}

            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
