import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "THRIFT.co | Sustainable Fashion",
    description: "Premium curated thrift and sustainable fashion store.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
            >
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <CartDrawer />
                <Footer />
            </body>
        </html>
    );
}
