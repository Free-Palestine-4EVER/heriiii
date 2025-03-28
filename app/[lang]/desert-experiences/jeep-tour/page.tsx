import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import PriceCard from "@/components/price-card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Calendar } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function JeepTourPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.jeepTour.hero.title}
        subtitle={dict.jeepTour.hero.subtitle}
        backgroundImage="/images/jeep-tour-hero-image.jpg"
        mobileBackgroundImage="/images/jeep-tour-hero-image-mobile.jpg"
        imageAlt="Jeep tour in Wadi Rum desert"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.jeepTour.intro.title}</h2>
                <p className="text-lg mb-4">{dict.jeepTour.intro.paragraph1}</p>
                <p className="text-lg mb-4">{dict.jeepTour.intro.paragraph2}</p>
                <p className="text-lg mb-6">{dict.jeepTour.intro.paragraph3}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.jeepTour.intro.features.tours}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.jeepTour.intro.features.attractions}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.jeepTour.intro.features.groups}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.jeepTour.intro.features.availability}</span>
                  </div>
                </div>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="#pricing">{dict.jeepTour.intro.buttonText}</Link>
                </Button>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/jeep-tour-detail.jpg" alt="Jeep Tour in Wadi Rum" fill className="object-cover" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light" id="pricing">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.jeepTour.pricing.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.jeepTour.pricing.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimationWrapper delay={100}>
              <PriceCard
                title={dict.jeepTour.pricing.person1.title}
                price={dict.jeepTour.pricing.person1.price}
                duration={dict.jeepTour.pricing.person1.duration}
                features={dict.jeepTour.pricing.features}
                buttonText={dict.jeepTour.pricing.buttonText}
                buttonLink={`/${lang}/contact-us`}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <PriceCard
                title={dict.jeepTour.pricing.person2to4.title}
                price={dict.jeepTour.pricing.person2to4.price}
                duration={dict.jeepTour.pricing.person2to4.duration}
                features={dict.jeepTour.pricing.features}
                buttonText={dict.jeepTour.pricing.buttonText}
                buttonLink={`/${lang}/contact-us`}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <PriceCard
                title={dict.jeepTour.pricing.person5to6.title}
                price={dict.jeepTour.pricing.person5to6.price}
                duration={dict.jeepTour.pricing.person5to6.duration}
                features={dict.jeepTour.pricing.features}
                buttonText={dict.jeepTour.pricing.buttonText}
                buttonLink={`/${lang}/contact-us`}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <PriceCard
                title={dict.jeepTour.pricing.person7plus.title}
                price={dict.jeepTour.pricing.person7plus.price}
                duration={dict.jeepTour.pricing.person7plus.duration}
                features={dict.jeepTour.pricing.features}
                buttonText={dict.jeepTour.pricing.buttonText}
                buttonLink={`/${lang}/contact-us`}
              />
            </AnimationWrapper>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-4">{dict.jeepTour.pricing.info.title}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>{dict.jeepTour.pricing.info.point1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>{dict.jeepTour.pricing.info.point2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>{dict.jeepTour.pricing.info.point3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>{dict.jeepTour.pricing.info.point4}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.jeepTour.experience.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.jeepTour.experience.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/rock-bridge.jpg" alt="Natural Rock Bridges" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.jeepTour.experience.rockBridges.title}</h3>
                <p>{dict.jeepTour.experience.rockBridges.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/sand-dunes.jpg" alt="Red Sand Dunes" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.jeepTour.experience.sandDunes.title}</h3>
                <p>{dict.jeepTour.experience.sandDunes.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/petroglyphs.jpg" alt="Ancient Petroglyphs" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.jeepTour.experience.petroglyphs.title}</h3>
                <p>{dict.jeepTour.experience.petroglyphs.description}</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.jeepTour.cta.title}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{dict.jeepTour.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href={`/${lang}/contact-us`}>{dict.jeepTour.cta.bookNow}</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                >
                  {dict.jeepTour.cta.whatsappUs}
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

