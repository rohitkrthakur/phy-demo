import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'], // Include all needed weights
});

export const metadata: Metadata = {
  title: "Physics Made Simple",
  description: "Learn physics in an easy and fun way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <body className="antialiased bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}