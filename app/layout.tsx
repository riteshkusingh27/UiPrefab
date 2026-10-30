import type { Metadata } from "next"
import { Oswald, Roboto, Roboto_Condensed } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
})
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-roboto-condensed",
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
    <html
      lang="en"
      className={`${roboto.variable} ${oswald.variable} ${robotoCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
