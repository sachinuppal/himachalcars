import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b4d3e",
};

export const metadata: Metadata = {
  title: {
    default: "Himachal Cars | Book Cabs & Tour Packages in Shimla, Manali, Dharamshala",
    template: "%s | Himachal Cars",
  },
  description:
    "Reliable cab booking and tour packages in Himachal Pradesh. Book your journey with Himachal Cars for safe, comfortable, and affordable travel.",
  metadataBase: new URL("https://himachalcars.com"),
  openGraph: {
    title: "Himachal Cars",
    description:
      "Book cabs and tour packages in Shimla, Manali, and Dharamshala",
    url: "https://himachalcars.com",
    type: "website",
    siteName: "Himachal Cars",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himachal Cars",
    description: "Book cabs and tour packages in Shimla, Manali, and Dharamshala",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#FAFAF8] pb-24 md:pb-0 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
