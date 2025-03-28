import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wadi Rum Heritage | Outdoor Camping & Desert Experiences",
  description:
    "Experience the magic of Wadi Rum with authentic Bedouin guides. Jeep tours, camping, hiking, climbing and more in the heart of Jordan's desert landscape.",
  icons: {
    icon: "/favicon.svg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'