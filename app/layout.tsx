import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
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
    <html lang="en" className={`${inter.className} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  )
}
