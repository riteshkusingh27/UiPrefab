import type { Metadata } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "800", "900"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "PrefabHome.com | Smarter Homes, Brighter Futures",
  description:
    "Explore high-quality prefab and modular homes designed for modern living.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
