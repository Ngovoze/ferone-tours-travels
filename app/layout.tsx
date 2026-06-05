import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://feronetours.com"),
  title: { default: "Ferone Tours & Travels | Explore Beyond Borders", template: "%s | Ferone Tours & Travels" },
  description: "Premium tours, safaris, visa assistance, flight booking, hotel reservations and international travel planning from Kenya.",
  keywords: ["Ferone Tours", "Kenya safaris", "travel agency Kenya", "visa assistance", "flight booking", "Zanzibar holidays"],
  openGraph: {
    title: "Ferone Tours & Travels",
    description: "Explore beyond borders with premium tours, safaris and travel planning.",
    url: "/",
    siteName: "Ferone Tours & Travels",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
