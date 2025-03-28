"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Locale } from "@/types"
import { locales } from "@/middleware"

interface NavbarProps {
  lang: Locale
  dictionary?: {
    navbar: {
      home: string
      desertExperiences: string
      jeepTour: string
      camping: string
      hiking: string
      climbing: string
      scrambling: string
      aboutUs: string
      whoWeAre: string
      faq: string
      usefulInformation: string
      contactUs: string
      whatsappUs: string
    }
  }
}

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false)
  const pathname = usePathname()

  // Default English translations if dictionary is not provided
  const t = dictionary?.navbar || {
    home: "Home",
    desertExperiences: "Desert Experiences",
    jeepTour: "Jeep Tour",
    camping: "Camping",
    hiking: "Hiking",
    climbing: "Climbing",
    scrambling: "Scrambling",
    aboutUs: "About Us",
    whoWeAre: "Who We Are",
    faq: "FAQ",
    usefulInformation: "Useful Information",
    contactUs: "Contact Us",
    whatsappUs: "WhatsApp Us",
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to get the path without the language prefix
  const getPathWithoutLang = (path: string) => {
    const pathParts = path.split("/")
    if (locales.includes(pathParts[1] as Locale)) {
      return "/" + pathParts.slice(2).join("/")
    }
    return path
  }

  // Function to switch language while preserving the current path
  const switchLanguage = (newLang: Locale) => {
    const currentPath = getPathWithoutLang(pathname)
    return `/${newLang}${currentPath}`
  }

  const isActive = (path: string) => {
    const pathWithoutLang = getPathWithoutLang(pathname)
    return pathWithoutLang === path
  }

  const isActiveParent = (path: string) => {
    const pathWithoutLang = getPathWithoutLang(pathname)
    return pathWithoutLang.startsWith(path)
  }

  // Flag images for language switcher
  const flagImages = {
    en: "/images/flag-en.png",
    fr: "/images/flag-fr.png",
  }

  return (
    <header
      className={cn(
        "w-full z-40 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/80", // Reverted to previous design
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href={`/${lang}`} className="flex items-center">
              <div className="relative h-14 w-56 md:h-14 md:w-56 h-11 w-44">
                <Image src="/images/logo.png" alt="Wadi Rum Heritage" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 justify-center">
              <Link
                href={`/${lang}`}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive("/") ? "text-black font-semibold" : "hover:text-desert",
                )}
              >
                {t.home}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="link"
                    className={cn(
                      "text-sm font-medium transition-colors p-0 h-auto focus:ring-0 focus:ring-offset-0",
                      isActiveParent("/desert-experiences") ? "text-black font-semibold" : "hover:text-desert",
                    )}
                  >
                    <span>{t.desertExperiences}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/desert-experiences/jeep-tour`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/desert-experiences/jeep-tour") ? "font-semibold" : "",
                      )}
                    >
                      {t.jeepTour}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/desert-experiences/camping`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/desert-experiences/camping") ? "font-semibold" : "",
                      )}
                    >
                      {t.camping}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/desert-experiences/hiking`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/desert-experiences/hiking") ? "font-semibold" : "",
                      )}
                    >
                      {t.hiking}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/desert-experiences/climbing`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/desert-experiences/climbing") ? "font-semibold" : "",
                      )}
                    >
                      {t.climbing}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/desert-experiences/scrambling`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/desert-experiences/scrambling") ? "font-semibold" : "",
                      )}
                    >
                      {t.scrambling}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="link"
                    className={cn(
                      "text-sm font-medium transition-colors p-0 h-auto focus:ring-0 focus:ring-offset-0",
                      isActiveParent("/about-us") ? "text-black font-semibold" : "hover:text-desert",
                    )}
                  >
                    <span>{t.aboutUs}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/about-us/who-we-are`}
                      className={cn("w-full cursor-pointer", isActive("/about-us/who-we-are") ? "font-semibold" : "")}
                    >
                      {t.whoWeAre}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/about-us/faq`}
                      className={cn("w-full cursor-pointer", isActive("/about-us/faq") ? "font-semibold" : "")}
                    >
                      {t.faq}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${lang}/about-us/useful-information`}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive("/about-us/useful-information") ? "font-semibold" : "",
                      )}
                    >
                      {t.usefulInformation}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher - Moved to the left of Contact Us button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 p-0">
                  <div className="relative w-6 h-6 overflow-hidden rounded-full">
                    <Image
                      src={flagImages[lang] || "/images/flag-en.png"}
                      alt={lang === "en" ? "English" : "Français"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem key={locale} asChild>
                    <Link
                      href={switchLanguage(locale)}
                      className={cn("cursor-pointer flex items-center gap-2", locale === lang ? "font-bold" : "")}
                    >
                      <div className="relative w-5 h-5 overflow-hidden rounded-full">
                        <Image
                          src={flagImages[locale] || "/images/flag-en.png"}
                          alt={locale === "en" ? "English" : "Français"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {locale === "en" ? "English" : "Français"}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              variant="default"
              className={cn(
                "bg-desert hover:bg-desert-dark text-white focus:ring-0 focus:ring-offset-0",
                isActive("/contact-us") ? "bg-desert-dark" : "",
              )}
            >
              <Link href={`/${lang}/contact-us`}>{t.contactUs}</Link>
            </Button>

            <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-black focus:ring-0 focus:ring-offset-0">
              <Link
                href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                target="_blank"
              >
                {t.whatsappUs}
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher - Moved to the left of menu button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 p-0">
                  <div className="relative w-6 h-6 overflow-hidden rounded-full">
                    <Image
                      src={flagImages[lang] || "/images/flag-en.png"}
                      alt={lang === "en" ? "English" : "Français"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem key={locale} asChild>
                    <Link
                      href={switchLanguage(locale)}
                      className={cn("cursor-pointer flex items-center gap-2", locale === lang ? "font-bold" : "")}
                    >
                      <div className="relative w-5 h-5 overflow-hidden rounded-full">
                        <Image
                          src={flagImages[locale] || "/images/flag-en.png"}
                          alt={locale === "en" ? "English" : "Français"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {locale === "en" ? "English" : "Français"}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button - 50% bigger and orange color */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="focus:ring-0 focus:ring-offset-0 h-12 w-12" // 50% bigger
              style={{ color: "#F39200" }} // Orange color
            >
              {isOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />} {/* 50% bigger icons */}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href={`/${lang}`}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100",
                isActive("/") ? "text-black font-semibold" : "",
              )}
              onClick={() => setIsOpen(false)}
            >
              {t.home}
            </Link>

            <div className="space-y-1 pl-3">
              <div
                className={cn(
                  "px-3 py-2 text-base font-medium",
                  isActiveParent("/desert-experiences") ? "text-black font-semibold" : "",
                )}
              >
                {t.desertExperiences}
              </div>
              <Link
                href={`/${lang}/desert-experiences/jeep-tour`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/desert-experiences/jeep-tour") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.jeepTour}
              </Link>
              <Link
                href={`/${lang}/desert-experiences/camping`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/desert-experiences/camping") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.camping}
              </Link>
              <Link
                href={`/${lang}/desert-experiences/hiking`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/desert-experiences/hiking") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.hiking}
              </Link>
              <Link
                href={`/${lang}/desert-experiences/climbing`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/desert-experiences/climbing") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.climbing}
              </Link>
              <Link
                href={`/${lang}/desert-experiences/scrambling`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/desert-experiences/scrambling") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.scrambling}
              </Link>
            </div>

            <div className="space-y-1 pl-3">
              <div
                className={cn(
                  "px-3 py-2 text-base font-medium",
                  isActiveParent("/about-us") ? "text-black font-semibold" : "",
                )}
              >
                {t.aboutUs}
              </div>
              <Link
                href={`/${lang}/about-us/who-we-are`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/about-us/who-we-are") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.whoWeAre}
              </Link>
              <Link
                href={`/${lang}/about-us/faq`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/about-us/faq") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.faq}
              </Link>
              <Link
                href={`/${lang}/about-us/useful-information`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium pl-6 hover:bg-gray-100",
                  isActive("/about-us/useful-information") ? "text-black font-semibold" : "",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.usefulInformation}
              </Link>
            </div>

            <div className="px-3 py-2">
              <Button
                asChild
                className={cn(
                  "w-full bg-desert hover:bg-desert-dark text-white mb-2",
                  isActive("/contact-us") ? "bg-desert-dark" : "",
                )}
              >
                <Link href={`/${lang}/contact-us`} onClick={() => setIsOpen(false)}>
                  {t.contactUs}
                </Link>
              </Button>

              <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  {t.whatsappUs}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

