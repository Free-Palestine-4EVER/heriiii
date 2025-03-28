import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import PriceCard from "@/components/price-card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Calendar } from "lucide-react"

export default function JeepTourPage() {
  return (
    <>
      <HeroSection
        title="Jeep Tours in Wadi Rum"
        subtitle="Explore the vast desert landscapes and iconic rock formations with our experienced Bedouin guides"
        backgroundImage="/images/jeep-tour-hero.jpg"
        mobileBackgroundImage="/images/jeep-tour-hero-mobile.jpg"
        buttonText="Book Jeep Tour"
        buttonLink="#pricing"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Desert by Jeep</h2>
                <p className="text-lg mb-4">
                  Our jeep tours offer the perfect way to explore the vast and stunning landscapes of Wadi Rum. Travel
                  across the desert in 4x4 vehicles driven by experienced Bedouin guides who know every corner of this
                  magnificent wilderness.
                </p>
                <p className="text-lg mb-4">
                  Visit iconic sites including ancient rock inscriptions, natural rock bridges, towering cliffs, and
                  hidden canyons. Our guides will share their knowledge of Bedouin culture, desert wildlife, and the
                  rich history of this UNESCO World Heritage site.
                </p>
                <p className="text-lg mb-6">
                  Whether you choose a few hours or a full-day tour with overnight camping, our jeep adventures provide
                  unforgettable memories of Jordan's most spectacular desert landscape.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-desert mr-2" />
                    <span>24-hour tours</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-desert mr-2" />
                    <span>Major attractions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-desert mr-2" />
                    <span>Small groups</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-desert mr-2" />
                    <span>Available daily</span>
                  </div>
                </div>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="#pricing">View Tour Pricing</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Jeep Tour Pricing</h2>
              <p className="text-lg text-muted-foreground">Choose the perfect tour package based on your group size</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimationWrapper delay={100}>
              <PriceCard
                title="1 Person"
                price="80 JOD"
                duration="24 hours"
                features={["Beduin Guide", "Bedouin tea & water", "Jeep and hikes", "All meals", "Overnight equipment"]}
                buttonText="Book Jeep Tour"
              />
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <PriceCard
                title="2 to 4 Persons"
                price="60 JOD"
                duration="24 hours"
                features={["Beduin Guide", "Bedouin tea & water", "Jeep and hikes", "All meals", "Overnight equipment"]}
                buttonText="Book Jeep Tour"
              />
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <PriceCard
                title="5 to 6 Persons"
                price="55 JOD"
                duration="24 hours"
                features={["Beduin Guide", "Bedouin tea & water", "Jeep and hikes", "All meals", "Overnight equipment"]}
                buttonText="Book Jeep Tour"
              />
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <PriceCard
                title="7 Persons or more"
                price="50 JOD"
                duration="24 hours"
                features={["Beduin Guide", "Bedouin tea & water", "Jeep and hikes", "All meals", "Overnight equipment"]}
                buttonText="Book Jeep Tour"
              />
            </AnimationWrapper>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Tour Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>All prices are per person and include guide, transportation, meals, and camping equipment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>Tours start and end at Wadi Rum Village or can be arranged from your accommodation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>Custom itineraries and shorter tours are available upon request.</span>
              </li>
              <li className="flex items-start">
                <span className="text-desert font-bold mr-2">•</span>
                <span>Booking in advance is recommended, especially during peak season.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Experience</h2>
              <p className="text-lg text-muted-foreground">Highlights of our Wadi Rum jeep tours</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/rock-bridge.jpg" alt="Natural Rock Bridges" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Natural Rock Bridges</h3>
                <p>
                  Marvel at the stunning natural rock bridges formed over thousands of years, including the famous Um
                  Fruth Rock Bridge.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/sand-dunes.jpg" alt="Red Sand Dunes" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Red Sand Dunes</h3>
                <p>
                  Climb the magnificent red sand dunes for panoramic views of the desert landscape and watch the sand
                  change colors with the shifting sunlight.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/petroglyphs.jpg" alt="Ancient Petroglyphs" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ancient Petroglyphs</h3>
                <p>
                  Discover ancient rock inscriptions and petroglyphs that tell the story of early civilizations and
                  Bedouin history in the region.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Jeep Tour?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to reserve your spot and experience the magic of Wadi Rum
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

