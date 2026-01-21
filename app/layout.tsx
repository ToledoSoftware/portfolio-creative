import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Criativo | Dev",
  description: "Portfólio desenvolvido com Next.js e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}