import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Find Your Next Car Without the Hassle | Auto Reach ",
    description: "Auto Reach Innovations is your free, no-pressure car buying service. We connect you with trusted dealerships, so you can find the right car at the right price — without the runaround.",
    icons: {
        icon: "/favicon.ico",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}
            >
                {children}
            </body>
        </html>
    );
}