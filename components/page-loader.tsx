"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import type { Locale } from "@/types"

interface PageLoaderProps {
  lang: Locale
  dictionary?: {
    loader?: {
      cleaningTheSand: string
      gatheringCamels: string
      preparingTea: string
    }
  }
}

export default function PageLoader({ lang, dictionary }: PageLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [loadingPhase, setLoadingPhase] = useState(1)
  const startTimeRef = useRef(Date.now())
  const animationFrameRef = useRef<number | null>(null)

  // Default text if dictionary is not provided
  const loaderTexts = {
    phase1: dictionary?.loader?.cleaningTheSand || "Cleaning the sand...",
    phase2: dictionary?.loader?.gatheringCamels || "Gathering the camels...",
    phase3: dictionary?.loader?.preparingTea || "Preparing the tea...",
  }

  // Current loading text based on phase
  const currentText =
    loadingPhase === 1 ? loaderTexts.phase1 : loadingPhase === 2 ? loaderTexts.phase2 : loaderTexts.phase3

  useEffect(() => {
    // Prevent scrolling while loader is visible
    document.body.style.overflow = "hidden"

    // Total duration: 3 seconds (reduced from 5 seconds)
    const totalDuration = 3000
    const phase1End = totalDuration * 0.333 // 1s
    const phase2End = totalDuration * 0.667 // 2s

    // Use requestAnimationFrame for smoother animation
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100)

      // Update progress
      setProgress(progressPercent)

      // Update phases
      if (elapsed < phase1End) {
        setLoadingPhase(1)
      } else if (elapsed < phase2End) {
        setLoadingPhase(2)
      } else {
        setLoadingPhase(3)
      }

      // Continue animation or end
      if (elapsed < totalDuration) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        // Animation complete, hide loader after a small delay
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ""
        }, 100) // Reduced delay
      }
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.body.style.overflow = ""
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <div className="w-64 sm:w-80 flex flex-col items-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-2">
          <Image src="/images/logo.png" alt="Wadi Rum Heritage" fill className="object-contain" priority />
        </div>
        <Progress
          value={progress}
          className="w-full h-3 mb-2"
          indicatorClassName="bg-[#F39200] transition-transform duration-300 ease-out will-change-transform"
        />
        <p className="text-[#F39200] font-medium">{currentText}</p>
      </div>
    </div>
  )
}

