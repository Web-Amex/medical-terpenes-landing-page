import type { Metadata } from "next";
import { adelphiSans, neueHaasUnicaW1GMono } from "./fonts";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Loud Spectrum Landing",
  description: "Static responsive landing page recreation from provided screenshots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${adelphiSans.variable} ${neueHaasUnicaW1GMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
