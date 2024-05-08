import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


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
          <div className=" bg-white">
            {/* <Navbar /> */}

            {children}
          </div>
      </body>
    </html>
  );
}
