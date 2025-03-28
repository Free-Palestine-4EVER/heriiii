import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Mountain, Shield, Check } from "lucide-react"

export default function HikingPage() {
  return (
    <>
      <HeroSection
        title="Hike Wadi Rum"
        subtitle="Explore the magnificent desert landscape on foot with our guided hiking tours"
        backgroundImage="/images/hiking-hero.jpg"
        mobileBackgroundImage="/images/hiking-hero-mobile.jpg"
        buttonText="Book a Hike"
        buttonLink="#book-hike"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                Hike in the wadi rum desert and <span className="font-semibold">admire every detail</span>, from the
                shades of colour to the animal tracks left in the sand. Let yourself be guided by the best Bedouin
                guides who will share with you all the secrets of the desert{" "}
                <span className="font-semibold">away from the crowds</span>.
              </p>

              <p className="text-lg mb-6">
                If you choose to trek with us, you will be accompanied by a guide on your walks while another one will
                carry your belongings, camp and food by Jeep. The second guide will be waiting for you with your meal
                ready at each break.
              </p>

              <p className="text-lg mb-6">
                This option is recommended for people who like to walk and want to stay 2 days or more in the desert.
                The time of the hikes in Wadi Rum varies between 3 hours and 8 hours. It all depends on your wishes and
                on the program established together beforehand.
              </p>

              <p className="text-lg mb-6">
                If you don't like to walk too much you can also{" "}
                <Link href="/desert-experiences/jeep-tour" className="text-desert hover:underline font-semibold">
                  visit the desert by jeep
                </Link>
                .
              </p>

              <p className="text-lg mb-8">
                We <span className="font-semibold">recommend</span> that you stay{" "}
                <span className="font-semibold">2 days or more</span> in the desert to{" "}
                <span className="font-semibold">fully enjoy</span> the experience and{" "}
                <span className="font-semibold">immerse yourself</span> in this unique way of life.
              </p>

              <div className="text-center mb-12">
                <Button asChild className="bg-desert hover:bg-desert-dark text-white px-8 py-6 text-lg" id="book-hike">
                  <Link href="/contact-us">BOOK A HIKE</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">Duration</h3>
                  <p>2 à 5 days</p>
                </div>

                <div className="flex flex-col items-center">
                  <Clock className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">Hikes</h3>
                  <p>3h to 8h</p>
                </div>

                <div className="flex flex-col items-center">
                  <Mountain className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">Difficulty</h3>
                  <p>Medium - Difficult</p>
                </div>

                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">Group size</h3>
                  <p>2 to 8 people</p>
                </div>

                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">Guide</h3>
                  <p>2 Bedouins</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PRICES TO HIKE IN WADI RUM</h2>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimationWrapper delay={100}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">1 person</div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">100</div>
                    <div className="text-gray-500 text-sm">per pers/24h</div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>2 Bedouin guides</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Jeep and hikes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>All meals/drinks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Overnight equipment</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href="/contact-us">BOOK NOW</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">2 to 4 persons</div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">70</div>
                    <div className="text-gray-500 text-sm">per pers/24h</div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>2 Bedouin guides</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Jeep and hikes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>All meals/drinks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Overnight equipment</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href="/contact-us">BOOK NOW</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">5 to 6 persons</div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">60</div>
                    <div className="text-gray-500 text-sm">per pers/24h</div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>2 Bedouin guides</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Jeep and hikes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>All meals/drinks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Overnight equipment</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href="/contact-us">BOOK NOW</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="flex flex-col">
                <div className="bg-orange-400 text-white text-center py-6 text-xl font-bold">7 to 8 persons</div>
                <div className="bg-white p-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">JOD</div>
                    <div className="text-5xl font-light">45</div>
                    <div className="text-gray-500 text-sm">per pers/24h</div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>2 Bedouin guides</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Jeep and hikes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>All meals/drinks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-desert mr-2" />
                      <span>Overnight equipment</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-50"
                    >
                      <Link href="/contact-us">BOOK NOW</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          <div className="max-w-5xl mx-auto mt-8 text-center text-gray-600 italic">
            <p>
              We can ask you to join a group of 2-3 people. If you are alone or in pairs and prefer not to be mixed with
              another group, we will ask you for a small supplement.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>Free for children under 5 years old</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>30% discount for children between 5 and 11 years old</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>Discount from 5 days and more</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hiking Experiences in Wadi Rum</h2>
              <p className="text-lg text-muted-foreground">
                Discover the beauty of the desert on foot with our experienced Bedouin guides
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/hiking-experience-1.jpg" alt="Day Hikes" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Day Hikes</h3>
                <p className="mb-4">
                  Perfect for those who want to experience the desert on foot but have limited time. Our day hikes range
                  from 3-5 hours and take you to some of the most beautiful spots in Wadi Rum.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>Guided by local Bedouin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>Lunch and water included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>Suitable for moderate fitness levels</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/hiking-experience-2.jpg" alt="Multi-Day Treks" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Day Treks</h3>
                <p className="mb-4">
                  Our recommended experience - spend 2-5 days hiking through the desert, camping under the stars, and
                  truly immersing yourself in the Bedouin way of life.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>Two Bedouin guides (one hiking, one with jeep support)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>All meals and camping equipment included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-desert font-bold mr-2">•</span>
                    <span>Customized routes based on your interests and fitness</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Wadi Rum on Foot?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to book your hiking adventure in the magnificent desert landscape
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href="/contact-us">Book Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                >
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

