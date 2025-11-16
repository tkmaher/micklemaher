import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mickle Maher",
  description: "The website of playwright Mickle Maher.",
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
