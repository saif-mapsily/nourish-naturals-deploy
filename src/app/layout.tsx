import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nourish Naturals - Health Ecommerce",
  description: "Nourish Naturals - Health Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="p-4 flex flex-col gap-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
