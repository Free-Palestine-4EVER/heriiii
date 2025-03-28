"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useAnimation } from "@/hooks/use-animation"

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-in-left" | "slide-in-right"
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimationWrapper({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useAnimation(ref, threshold, once)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (delay === 0) {
      setShouldAnimate(isVisible)
    } else {
      let timeoutId: NodeJS.Timeout
      if (isVisible) {
        timeoutId = setTimeout(() => {
          setShouldAnimate(true)
        }, delay)
      }
      return () => {
        if (timeoutId) clearTimeout(timeoutId)
      }
    }
  }, [isVisible, delay])

  return (
    <div ref={ref} className={cn(animation, shouldAnimate ? "visible" : "", className)} style={{ overflow: "visible" }}>
      {children}
    </div>
  )
}

