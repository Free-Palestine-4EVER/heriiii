"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WhatsappFloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if the user is on a mobile device
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

    // Show button after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappUrl = isMobile
    ? "https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20camp"
    : "https://web.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20camp"

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="absolute inset-0 bg-white rounded-full p-1.5">
          <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={64} height={64} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
      </Link>
    </div>
  )
}

