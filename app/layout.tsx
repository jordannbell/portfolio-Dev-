import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan BELL - Développeur Full Stack",
  description:
    "Portfolio de Jordan BELL, développeur full stack passionné par la création de solutions web innovantes. React, Next.js, Node.js, TypeScript et plus encore.",
  keywords: [
    "Jordan BELL",
    "développeur full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "web developer",
    "développeur web",
  ],
  authors: [{ name: "Jordan BELL" }],
  creator: "Jordan BELL",
  publisher: "Jordan BELL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio-jordanb.vercel.app"),
  openGraph: {
    title: "Jordan BELL - Développeur Full Stack",
    description:
      "Portfolio de Jordan BELL, développeur full stack passionné par la création de solutions web innovantes.",
    url: "https://portfolio-jordanb.vercel.app",
    siteName: "Jordan BELL Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan BELL - Développeur Full Stack",
    description:
      "Portfolio de Jordan BELL, développeur full stack passionné par la création de solutions web innovantes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
