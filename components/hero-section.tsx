import type React from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  mobileBackgroundImage?: string
  imageAlt?: string
  height?: string
  overlay?: boolean
  children?: React.ReactNode
  className?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  mobileBackgroundImage,
  imageAlt = "Hero image",
  height = "h-[80vh] md:h-[90vh]", // Increased height
  overlay = true,
  children,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("relative w-full", height, className)}>
      {/* Desktop background */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      />

      {/* Mobile background */}
      <div
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: `url(${mobileBackgroundImage || backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {overlay && <div className="absolute inset-0 bg-black/40 z-0" />}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-2xl mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

