import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, ThumbsUp, Award, Clock, MapPin } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        title="About Wadi Rum Heritage"
        subtitle="Learn about our story, our team, and our commitment to authentic Bedouin experiences"
        backgroundImage="/images/about-hero.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  Wadi Rum Heritage was founded by local Bedouins who have lived in this magnificent desert landscape
                  for generations. Our team grew up exploring the vast canyons, climbing the sandstone mountains, and
                  learning the ancient ways of desert life from our elders.
                </p>
                <p className="text-lg mb-4">
                  What began as a small family operation has grown into a respected tour company, but we've never lost
                  our connection to our roots. We remain committed to sharing the authentic culture, traditions, and
                  natural beauty of Wadi Rum with visitors from around the world.
                </p>
                <p className="text-lg mb-6">
                  Our deep knowledge of the desert, passed down through generations, allows us to offer unique
                  experiences that go beyond typical tourism. When you travel with Wadi Rum Heritage, you're not just a
                  tourist – you're our honored guest, experiencing our homeland through the eyes of those who know and
                  love it best.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-desert mr-2" />
                    <span>Passion for our heritage</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-desert mr-2" />
                    <span>Local Bedouin team</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-5 w-5 text-desert mr-2" />
                    <span>Authentic experiences</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-desert mr-2" />
                    <span>Quality service</span>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/about-team.jpg" alt="Wadi Rum Heritage Team" fill className="object-cover" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-lg text-muted-foreground">What drives us and shapes the experiences we create</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Heart className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Authentic Experiences</h3>
                <p>
                  We are committed to providing genuine Bedouin experiences that reflect our culture, traditions, and
                  way of life. We believe in sharing the real Wadi Rum, not a commercialized version.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Users className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p>
                  We employ local Bedouins and support the local community. By choosing Wadi Rum Heritage, you're
                  directly contributing to the sustainable development of our region.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <ThumbsUp className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Environmental Respect</h3>
                <p>
                  We practice responsible tourism that respects and preserves the delicate desert ecosystem. We follow
                  leave-no-trace principles and educate our guests about desert conservation.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/about-experience.jpg" alt="Wadi Rum Experience" fill className="object-cover" />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
                <p className="text-lg mb-4">
                  Our team consists of local Bedouins who were born and raised in Wadi Rum. We know every canyon, rock
                  formation, and hidden gem in this vast desert landscape.
                </p>
                <p className="text-lg mb-4">
                  Our guides are not just experts in desert navigation and outdoor activities – they're also passionate
                  storytellers who love sharing Bedouin culture, history, and traditions with our guests.
                </p>
                <p className="text-lg mb-6">
                  Many of our team members speak multiple languages, including Arabic, English, and often French or
                  Spanish, allowing us to connect with visitors from around the world.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-desert mr-2" />
                    <span>Years of experience</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-desert mr-2" />
                    <span>Local knowledge</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-desert mr-2" />
                    <span>Certified guides</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-desert mr-2" />
                    <span>Multilingual staff</span>
                  </div>
                </div>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="/contact-us">Contact Our Team</Link>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Wadi Rum with Us</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join us for an authentic desert adventure guided by local Bedouins who are passionate about sharing their
              heritage
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link href="/desert-experiences/jeep-tour">Explore Our Experiences</Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

