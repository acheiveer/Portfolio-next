import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {ThemeProvider} from "next-themes"

const inter = Raleway({ 
  subsets: ["latin"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Prabhakar Kumar",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-[100%]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
          <Navbar />
          <div>{children}</div>
          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
