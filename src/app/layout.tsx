import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Analytics Course - InsightsIQ",
  description: "Unlock your potential with our comprehensive data analytics course, featuring expert instructors and real-world applications.",
  // Optional: Add more metadata fields as needed
  keywords: "data analytics, course, certification, career growth, data science"
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
