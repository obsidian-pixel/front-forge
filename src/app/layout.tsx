import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // Get the pathname from headers - await the Promise
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  // Extract the first part of the slug (remove leading slash and get first segment)
  const slug = pathname.split("/")[1];

  // Create the title based on the slug
  const title = slug
    ? `Front Forge - ${slug.charAt(0).toUpperCase() + slug.slice(1)}`
    : "Front Forge";

  return {
    title,
    description: "Your modern web development toolbox",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Navbar component */}
        <div className="root-layout-container">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
