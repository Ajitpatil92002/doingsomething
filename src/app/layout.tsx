import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doing Something",
  description: "Doing Something",
  generator: "Doing Something",
  applicationName: "Doing Something",
  authors: [
    {
      name: "Ajit Patil",
      url: `patilajit.vercel.app`,
    },
  ],
  themeColor: "#000",
  colorScheme: "dark",
  creator: "Ajit Patil",
  publisher: "Ajit Patil",
  openGraph: {
    title: "Doing Something",
    description: "",
    url: `${process.env.BASE_URL || "https://doingsomething.online"}`,
    siteName: "Doing Something",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Doing Something",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
