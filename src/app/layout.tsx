import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componet/nav/Navbar";
import { getURL } from "@/libs/helpers";
import { createClient } from "@/libs/supabase/server";
// import useAuth from "@/hooks/useAuth";
import { AuthProvider } from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";
import AlertHandler from "@/componet/ui/alerthandler/AlertHandler";
import { DesignProvider } from "@/context/DesignProvider";
import Footer from "@/componet/footer/Footer";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "@/componet/common/ErrorBoundary";
import { toast, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Webspirre",
  description: "Find Web design Inspiration Faster",
  cardImage: "/webspirrelogo.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: getURL(),
  webspirrelogo: "/webspirrelogo.png",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: "origin-when-cross-origin",
    keywords: ["Vercel", "Supabase", "Next.js"],
    authors: [{ name: "Vercel", url: "https://vercel.com/" }],
    creator: "Vercel",
    publisher: "Vercel",
    robots: meta.robots,
    icons: { icon: meta.webspirrelogo },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: "website",
      siteName: meta.title,
    },
    twitter: {
      card: "summary_large_image",
      site: "@Vercel",
      creator: "@Vercel",
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // const { setAuth } = useAuth();
  // setAuth(user);
  console.log("USER", user);
  return (
    <html lang="en">
      <head>
        <script src="//code.jivosite.com/widget/MO06Xt0i4A" async></script>
      </head>
      <body>
        <AuthProvider>
          <DesignProvider>
            <Toaster />
            <ToastContainer />
            {/* <ErrorBoundary FallbackComponent={Fallback}> */}
            <main className="bg-white ">
              <AlertHandler />
              <div className="fixed w-full top-0 opacity-[100%] z-50">
                <Navbar user={user} />
              </div>
              {children}
              <div className=" ">
                <Footer />
              </div>
            </main>
            {/* </ErrorBoundary> */}
          </DesignProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
