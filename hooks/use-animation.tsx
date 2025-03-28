"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useAnimation(ref: React.RefObject<HTMLElement>, threshold = 0.1, once = true): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else {
            if (!once) {
              setIsVisible(false)
            }
          }
        })
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold, once])

  return isVisible
}

