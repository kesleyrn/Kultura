import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { IMG } from "@/data";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "Kultura | Fine Dining, Flavours of Asia | Kibagabaga, Kigali",
  description: "Kultura is a fine dining restaurant in Kibagabaga, Kigali, bringing a fusion of Asian cuisine to Rwanda. Signature cocktails, exceptional wines, outdoor seating.",
  // Favicon is the Kultura logo. For production save it as app/icon.png and remove this line.
  icons: { icon: IMG.logo, apple: IMG.logo },
  openGraph: { title: "Kultura | Flavours of Asia, Kigali", images: [IMG.hero], type: "website" },
};
export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
