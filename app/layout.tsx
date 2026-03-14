import type React from "react"
import type { Metadata } from "next"
import { League_Spartan, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Motorsport UNLaM - Equipo de Formula SAE en Argentina",
  description:
    "Somos un equipo interdisciplinario de la Universidad Nacional de La Matanza desarrollando un monoplaza eléctrico para competir en la Formula SAE Brasil 2027",
  generator: "Motorsport UNLaM",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${leagueSpartan.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
