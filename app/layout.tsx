import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "home",
  description: "Welcome to my home.",
};

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
        {/* <ASCII /> */}
        <div className="text-blue-800 selection:bg-black selection:text-white font-medium px-4 py-4 md:px-16 md:py-10 max-w-[65ch] space-y-6 text-sm md:text-base">
          {children}
        </div>
      </body>
    </html>
  );
}
