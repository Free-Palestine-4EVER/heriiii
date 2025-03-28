import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import type { Locale } from "@/types"
import Image from "next/image"

interface FooterProps {
  lang: Locale
  dictionary?: {
    footer: {
      description: string
      quickLinks: string
      desertExperiences: string
      contactInformation: string
      allRightsReserved: string
      address: string
      phone: string
      email: string
      hours: string
    }
    navbar: {
      home: string
      jeepTour: string
      camping: string
      whoWeAre: string
      contactUs: string
    }
  }
}

export default function Footer({ lang, dictionary }: FooterProps) {
  // Default English translations if dictionary is not provided
  const t = dictionary?.footer || {
    description:
      "Experience the magic of Wadi Rum with authentic Bedouin guides. Discover the beauty of Jordan's desert landscape.",
    quickLinks: "Quick Links",
    desertExperiences: "Desert Experiences",
    contactInformation: "Contact Information",
    allRightsReserved: "All rights reserved",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
  }

  const nav = dictionary?.navbar || {
    home: "Home",
    jeepTour: "Jeep Tour",
    camping: "Camping",
    whoWeAre: "Who We Are",
    contactUs: "Contact Us",
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative h-12 w-48 mb-4">
              <Image
                src="/images/logo.png"
                alt="Wadi Rum Heritage"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">{t.description}</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-desert transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-desert transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:info@wadirumheritage.com"
                className="text-gray-300 hover:text-desert transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-gray-300 hover:text-desert transition-colors">
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/jeep-tour`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  {nav.jeepTour}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/camping`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  {nav.camping}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about-us/who-we-are`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  {nav.whoWeAre}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact-us`} className="text-gray-300 hover:text-desert transition-colors">
                  {nav.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.desertExperiences}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/desert-experiences/jeep-tour`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  {nav.jeepTour}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/camping`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  {nav.camping}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/hiking`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  Hiking
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/climbing`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  Climbing
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/desert-experiences/scrambling`}
                  className="text-gray-300 hover:text-desert transition-colors"
                >
                  Scrambling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactInformation}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-desert shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">{t.address}</h3>
                  <p className="text-gray-300">Wadi Rum Village, Jordan</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-desert shrink-0" />
                <div>
                  <h3 className="font-semibold">{t.phone}</h3>
                  <p className="text-gray-300">+962 777 424 837</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-desert shrink-0" />
                <div>
                  <h3 className="font-semibold">{t.email}</h3>
                  <p className="text-gray-300">info@wadirumheritage.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Wadi Rum Heritage. {t.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  )
}

