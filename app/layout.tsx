import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://micklemaher.net"),
  applicationName: "Mickle Maher",
  title: {
    template: '%s | Mickle Maher',
    default: 'Mickle Maher', // a default is required when creating a template
  },
  description: "The website of playwright Mickle Maher.",
  keywords: ["chicago", "theater", "playwright", "oobleck", "off-broadway"],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  openGraph: {
    locale: "en_US",
    siteName: "Mickle Maher",
    url: "https://micklemaher.net",
    type: "website",
    title: "Mickle Maher",
    description:
      "The website of playwright Mickle Maher.",
    images: [
      {
        url: "https://micklemaher.net/drawing.jpeg",
        width: 500,
        height: 800,
        alt: "micklemaher"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mickle Maher",
    description:
      "The website of playwright Mickle Maher.",
    creator: "@otherseas_",
    images: [
      {
        url: "https://micklemaher.net/drawing.jpeg",
        width: 500,
        height: 800,
        alt: "micklemaher"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        {children}
      </body>
    </html>
  );
}
