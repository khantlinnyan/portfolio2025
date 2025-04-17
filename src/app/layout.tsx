import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import SmoothScroll from "@/components/animation/smooth-scroll";
import Footer from "@/components/sections/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const marope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khant Lin Nyan | dev",
  description: "Khant Lin Nyan, fullstack developer based on Myanmar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marope.className} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        {/* <PageTransitionWrapper> */}
        <SmoothScroll>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </SmoothScroll>
        {/* </PageTransitionWrapper> */}
      </body>
    </html>
  );
}
