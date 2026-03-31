import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext"; // 1. Import the ThemeProvider

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Drive More Car Sales with Real-World Lead Generation ",
    description: "Discover how real-world lead generation can drive more car sales for your dealership. Learn effective strategies to attract and convert potential buyers in the automotive industry.",
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
        // 3. Add suppressHydrationWarning to prevent a mismatch error
        // between server and client rendering when the theme is determined.
        <html lang="en" suppressHydrationWarning>
            <body
                // 2. Update the body classes to support both light and dark themes
                // The 'dark:' prefix will apply when the <html> element has the 'dark' class.
                className={`${inter.variable} font-sans antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white`}
            >
                {/* 1. Wrap the entire application with the ThemeProvider */}
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}