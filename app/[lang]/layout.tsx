import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"
import WhatsappFloatingButton from "@/components/whatsapp-floating-button"
import { i18n } from "@/dictionaries/i18n-config"
import MarqueeAnnouncement from "@/components/marquee-announcement"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wadi Rum Heritage | Outdoor Camping & Desert Experiences",
  description:
    "Experience the magic of Wadi Rum with authentic Bedouin guides. Jeep tours, camping, hiking, climbing and more in the heart of Jordan's desert landscape.",
  icons: {
    icon: "/favicon.svg",
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Fixed header container that includes both announcement bar and navbar */}
          <div className="fixed top-0 left-0 right-0 z-50 w-full">
            <MarqueeAnnouncement
              messages={[
                "For groups we offer discount !",
                "We provide telescope for stargazing on request",
                "We offer sandboarding & camel rides",
              ]}
              backgroundColor="#F39200"
              textColor="white"
            />
            <Navbar lang={params.lang} />
          </div>

          {/* Add padding to account for the fixed header (announcement + navbar) */}
          <div className="pt-[calc(30px+4rem)]">
            <PageLoader />
            <main className="flex-grow">{children}</main>
            <Footer lang={params.lang} />
            <WhatsappFloatingButton />
          </div>
        </div>
      </body>
    </html>
  )
}

