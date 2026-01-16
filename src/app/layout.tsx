import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/resizable-navbar-demo"; // Import the navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDemo /> {/* Add the navbar here */}
        {children}
      </body>
    </html>
  );
}