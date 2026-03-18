import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absolute Naansense | Premium Dining in Renukoot",
  description: "Experience one of Renukoot’s most loved dining spots. Great food, relaxing vibes, and unforgettable moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-charcoal bg-cream`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
