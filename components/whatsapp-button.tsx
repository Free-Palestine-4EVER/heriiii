"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if user is on mobile
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

    // Show button after scrolling down
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

  // Different WhatsApp links for mobile and desktop
  const whatsappLink = isMobile
    ? "https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20a%20question%20about%20your%20camp"
    : "https://web.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20a%20question%20about%20your%20camp"

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative w-16 h-16">
          <Image src="/images/whatsapp-icon.png" alt="WhatsApp" fill className="rounded-full" />
        </div>
      </Link>
    </div>
  )
}

