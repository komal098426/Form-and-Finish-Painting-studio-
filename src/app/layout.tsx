import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Form & Finish — Painting Studio",
  description:
    "Thoughtful residential and commercial painting, from careful preparation to a considered finish. Explore services and request a free quote.",
  applicationName: "Form & Finish — Painting Studio",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Form & Finish — Painting Studio",
    title: "Exceptional Painting. Beautifully Finished.",
    description:
      "Residential and commercial painting presented with a careful eye for preparation, finish and detail.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f0eee7",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
