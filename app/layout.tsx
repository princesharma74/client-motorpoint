import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed, Rubik } from "next/font/google"

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
})

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Motorpoint Van Rentals - Flexible, Affordable, and Ready to Go!",
  description:
    "Melbourne's Trusted Choice for Eco-Friendly Hybrid, Diesel & Petrol Vans. Same-Day Pickup in Ravenhall!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
