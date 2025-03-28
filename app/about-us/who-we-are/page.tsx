import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, ThumbsUp } from "lucide-react"

export default function WhoWeArePage() {
  return (
    <>
      <HeroSection
        title="Who We Are"
        subtitle="Meet our team of experienced Bedouin guides who will make your Wadi Rum experience unforgettable"
        backgroundImage="/images/about-hero.jpg"
        mobileBackgroundImage="/images/about-hero-mobile.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg mb-6">
                Wadi Rum Heritage was founded by local Bedouins who have lived in this magnificent desert landscape for
                generations. Our team grew up exploring the vast canyons, climbing the sandstone mountains, and learning
                the ancient ways of desert life from our elders.
              </p>

              <p className="text-lg mb-6">
                What began as a small family operation has grown into a respected tour company, but we've never lost our
                connection to our roots. We remain committed to sharing the authentic culture, traditions, and natural
                beauty of Wadi Rum with visitors from around the world.
              </p>

              <p className="text-lg mb-6">
                Our deep knowledge of the desert, passed down through generations, allows us to offer unique experiences
                that go beyond typical tourism. When you travel with Wadi Rum Heritage, you're not just a tourist –
                you're our honored guest, experiencing our homeland through the eyes of those who know and love it best.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Guides</h2>
              <p className="text-lg text-muted-foreground">
                Our experienced Bedouin guides are passionate about sharing their heritage and knowledge
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-mohammed.jpg" alt="Mohammed" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mohammed</h3>
                <p className="mb-4">
                  Mohammed was born and raised in Wadi Rum village. With over 15 years of experience guiding visitors
                  through the desert, he knows every corner of Wadi Rum. Mohammed speaks Arabic, English, and some
                  French.
                </p>
                <p className="text-desert font-semibold">Specialties: Jeep tours, hiking, Bedouin culture</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-ahmad.jpg" alt="Ahmad" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ahmad</h3>
                <p className="mb-4">
                  Ahmad has been exploring Wadi Rum since childhood. He is an expert in desert navigation and has a deep
                  knowledge of local plants and wildlife. Ahmad is known for his warm hospitality and storytelling
                  around the campfire.
                </p>
                <p className="text-desert font-semibold">Specialties: Camping, star gazing, desert ecology</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-salem.jpg" alt="Salem" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Salem</h3>
                <p className="mb-4">
                  Salem comes from a long line of Bedouin climbers. He has been scaling the rock formations of Wadi Rum
                  for over 10 years and has discovered several new climbing routes. Salem speaks Arabic, English, and
                  Italian.
                </p>
                <p className="text-desert font-semibold">Specialties: Rock climbing, scrambling, photography</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-hussein.jpg" alt="Hussein" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hussein</h3>
                <p className="mb-4">
                  Hussein is our hiking specialist with extensive knowledge of the desert trails. He has a passion for
                  Bedouin history and enjoys sharing stories about the ancient inscriptions and archaeological sites in
                  Wadi Rum.
                </p>
                <p className="text-desert font-semibold">Specialties: Hiking, history, archaeology</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-ali.jpg" alt="Ali" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ali</h3>
                <p className="mb-4">
                  Ali is our youngest guide but has already earned a reputation for his knowledge of traditional Bedouin
                  cuisine. He ensures that our guests enjoy authentic meals during their desert adventures.
                </p>
                <p className="text-desert font-semibold">Specialties: Desert cooking, camel treks, local traditions</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-suleiman.jpg" alt="Suleiman" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Suleiman</h3>
                <p className="mb-4">
                  Suleiman has been guiding in Wadi Rum for over 20 years. His extensive experience and calm demeanor
                  make him perfect for leading longer expeditions and multi-day treks through the desert.
                </p>
                <p className="text-desert font-semibold">Specialties: Extended treks, survival skills, Bedouin music</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">What drives us and shapes the experiences we create</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-[#25D366]"
              >
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

