"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnnouncementBarProps {
  messages: string[]
  backgroundColor?: string
  textColor?: string
  speed?: number
}

export default function AnnouncementBar({
  messages,
  backgroundColor = "#F39200",
  textColor = "white",
  speed = 30, // pixels per second
}: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 5000) // Change message every 5 seconds

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="w-full py-2 overflow-hidden" style={{ backgroundColor }}>
      <div className="relative flex items-center justify-center h-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-full text-center whitespace-nowrap transition-opacity duration-500 marquee-text",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
            style={{ color: textColor }}
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  )
}

