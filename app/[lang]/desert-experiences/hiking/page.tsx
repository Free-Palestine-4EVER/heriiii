import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Mountain, Shield, Check } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function HikingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.hiking.hero.title}
        subtitle={dict.hiking.hero.subtitle}
        backgroundImage="/images/hiking-hero.jpg"
        mobileBackgroundImage="/images/hiking-hero-image-mobile.jpg"
        imageAlt="Hiking in Wadi Rum desert"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                {dict.hiking.intro?.paragraph1 ||
                  "Hike in the wadi rum desert and admire every detail, from the shades of colour to the animal tracks left in the sand. Let yourself be guided by the best Bedouin guides who will share with you all the secrets of the desert away from the crowds."}
              </p>

              <p className="text-lg mb-6">
                {dict.hiking.intro?.paragraph2 ||
                  "If you choose to trek with us, you will be accompanied by a guide on your walks while another one will carry your belongings, camp and food by Jeep. The second guide will be waiting for you with your meal ready at each break."}
              </p>

              <p className="text-lg mb-6">
                {dict.hiking.intro?.paragraph3 ||
                  "This option is recommended for people who like to walk and want to stay 2 days or more in the desert. The time of the hikes in Wadi Rum varies between 3 hours and 8 hours. It all depends on your wishes and on the program established together beforehand."}
              </p>

              <p className="text-lg mb-6">
                {dict.hiking.intro?.paragraph4 || "If you don't like to walk too much you can also"}
                <Link
                  href={`/${lang}/desert-experiences/jeep-tour`}
                  className="text-desert hover:underline font-semibold"
                >
                  {dict.hiking.intro?.jeepTourLink || "visit the desert by jeep"}
                </Link>
                .
              </p>

              <p className="text-lg mb-8">
                {dict.hiking.intro?.recommendation ||
                  "We recommend that you stay 2 days or more in the desert to fully enjoy the experience and immerse yourself in this unique way of life."}
              </p>

              <div className="text-center mb-12">
                <Button asChild className="bg-desert hover:bg-desert-dark text-white px-8 py-6 text-lg" id="book-hike">
                  <Link href={`/${lang}/contact-us`}>{dict.hiking.intro?.buttonText || "BOOK A HIKE"}</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.hiking.features?.duration?.title || "Duration"}</h3>
                  <p>{dict.hiking.features?.duration?.value || "2 to 5 days"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Clock className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.hiking.features?.hikes?.title || "Hikes"}</h3>
                  <p>{dict.hiking.features?.hikes?.value || "3h to 8h"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Mountain className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.hiking.features?.difficulty?.title || "Difficulty"}</h3>
                  <p>{dict.hiking.features?.difficulty?.value || "Medium - Difficult"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.hiking.features?.groupSize?.title || "Group size"}</h3>
                  <p>{dict.hiking.features?.groupSize?.value || "2 to 8 people"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.hiking.features?.guide?.title || "Guide"}</h3>
                  <p>{dict.hiking.features?.guide?.value || "2 Bedouins"}</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.hiking.pricing?.title || "PRICES TO HIKE IN WADI RUM"}
              </h2>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimationWrapper delay={100}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">
                  {dict.hiking.pricing?.person1?.title || "1 person"}
                </div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">{dict.hiking.pricing?.person1?.price || "100"}</div>
                    <div className="text-gray-500 text-sm">{dict.hiking.pricing?.person1?.unit || "per pers/24h"}</div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.guides || "2 Bedouin guides"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.transport || "Jeep and hikes"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.meals || "All meals/drinks"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.equipment || "Overnight equipment"}</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href={`/${lang}/contact-us`}>{dict.common.bookNow}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">
                  {dict.hiking.pricing?.person2to4?.title || "2 to 4 persons"}
                </div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">{dict.hiking.pricing?.person2to4?.price || "70"}</div>
                    <div className="text-gray-500 text-sm">
                      {dict.hiking.pricing?.person2to4?.unit || "per pers/24h"}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.guides || "2 Bedouin guides"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.transport || "Jeep and hikes"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.meals || "All meals/drinks"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.equipment || "Overnight equipment"}</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href={`/${lang}/contact-us`}>{dict.common.bookNow}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">
                  {dict.hiking.pricing?.person5to6?.title || "5 to 6 persons"}
                </div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">{dict.hiking.pricing?.person5to6?.price || "60"}</div>
                    <div className="text-gray-500 text-sm">
                      {dict.hiking.pricing?.person5to6?.unit || "per pers/24h"}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.guides || "2 Bedouin guides"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.transport || "Jeep and hikes"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.meals || "All meals/drinks"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.equipment || "Overnight equipment"}</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href={`/${lang}/contact-us`}>{dict.common.bookNow}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">
                  {dict.hiking.pricing?.person7to8?.title || "7 to 8 persons"}
                </div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">{dict.hiking.pricing?.person7to8?.price || "45"}</div>
                    <div className="text-gray-500 text-sm">
                      {dict.hiking.pricing?.person7to8?.unit || "per pers/24h"}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.guides || "2 Bedouin guides"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.transport || "Jeep and hikes"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.meals || "All meals/drinks"}</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>{dict.hiking.pricing?.features?.equipment || "Overnight equipment"}</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href={`/${lang}/contact-us`}>{dict.common.bookNow}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          <div className="max-w-5xl mx-auto mt-8 text-center text-gray-600 italic">
            <p>
              {dict.hiking.pricing?.note ||
                "We can ask you to join a group of 2-3 people. If you are alone or in pairs and prefer not to be mixed with another group, we will ask you for a small supplement."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>{dict.hiking.pricing?.discount1 || "Free for children under 5 years old"}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>{dict.hiking.pricing?.discount2 || "30% discount for children between 5 and 11 years old"}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>{dict.hiking.pricing?.discount3 || "Discount from 5 days and more"}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.hiking.experiences?.title || "Hiking Experiences in Wadi Rum"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.hiking.experiences?.subtitle ||
                  "Discover the beauty of the desert on foot with our experienced Bedouin guides"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/hiking-experience-1.jpg" alt="Day Hikes" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{dict.hiking.experiences?.dayHikes?.title || "Day Hikes"}</h3>
                <p className="mb-4">
                  {dict.hiking.experiences?.dayHikes?.description ||
                    "Perfect for those who want to experience the desert on foot but have limited time. Our day hikes range from 3-5 hours and take you to some of the most beautiful spots in Wadi Rum."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>{dict.hiking.experiences?.dayHikes?.feature1 || "Guided by local Bedouin"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>{dict.hiking.experiences?.dayHikes?.feature2 || "Lunch and water included"}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>{dict.hiking.experiences?.dayHikes?.feature3 || "Suitable for moderate fitness levels"}</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/hiking-experience-2.jpg" alt="Multi-Day Treks" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {dict.hiking.experiences?.multiDay?.title || "Multi-Day Treks"}
                </h3>
                <p className="mb-4">
                  {dict.hiking.experiences?.multiDay?.description ||
                    "Our recommended experience - spend 2-5 days hiking through the desert, camping under the stars, and truly immersing yourself in the Bedouin way of life."}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>
                      {dict.hiking.experiences?.multiDay?.feature1 ||
                        "Two Bedouin guides (one hiking, one with jeep support)"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>
                      {dict.hiking.experiences?.multiDay?.feature2 || "All meals and camping equipment included"}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>
                      {dict.hiking.experiences?.multiDay?.feature3 ||
                        "Customized routes based on your interests and fitness"}
                    </span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {dict.hiking.cta?.title || "Ready to Explore Wadi Rum on Foot?"}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {dict.hiking.cta?.subtitle ||
                "Contact us today to book your hiking adventure in the magnificent desert landscape"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href={`/${lang}/contact-us`}>{dict.common.bookNow}</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                >
                  {dict.common.whatsappUs}
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

