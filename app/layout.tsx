import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carolina Coast Lawn Care | Lawn Care & Landscaping in Horry County, SC",
  description:
    "Professional lawn care and landscaping in Longs, SC and all of Horry County. Mowing, fertilization, aeration, sod, rock beds, and hardscape. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
