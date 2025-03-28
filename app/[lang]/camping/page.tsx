import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Moon, Coffee, Utensils } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function CampingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.camping.hero.title}
        subtitle={dict.camping.hero.subtitle}
        backgroundImage="/images/camping-hero.jpg"
        mobileBackgroundImage="/images/camping-hero-mobile.jpg"
        buttonText={dict.camping.hero.buttonText}
        buttonLink="#camping-options"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.camping.intro.title}</h2>
                <p className="text-lg mb-4">{dict.camping.intro.paragraph1}</p>
                <p className="text-lg mb-4">{dict.camping.intro.paragraph2}</p>
                <p className="text-lg mb-6">{dict.camping.intro.paragraph3}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.camping.intro.features.stargazing}</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.camping.intro.features.nights}</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.camping.intro.features.tea}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.camping.intro.features.meals}</span>
                  </div>
                </div>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="#camping-options">{dict.camping.intro.buttonText}</Link>
                </Button>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/camping-detail.jpg"
                  alt="Desert Camping in Wadi Rum"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="camping-options">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">{dict.common.bookNow}</h2>
          </div>
          <div className="flex justify-center">
            <Button asChild className="bg-desert hover:bg-desert-dark">
              <Link href={`/${lang}/contact-us`}>{dict.common.contactUs}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

