import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Nav/Navbar";
import { openSans } from "./font";

export const metadata: Metadata = {
  title: "Whitespace - Collaborative Project Management Tool",
  description:
    "Whitespace is a project management tool designed for teams to collaborate, analyze, and manage tasks efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
