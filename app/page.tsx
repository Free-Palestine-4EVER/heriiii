import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ExperienceCard from "@/components/experience-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimationWrapper from "@/components/animation-wrapper"
import { MapPin, Calendar, Users, Clock, Award, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSection
        title="Experience the Magic of Wadi Rum"
        subtitle="Discover the breathtaking beauty of Jordan's desert landscape with authentic Bedouin guides"
        imageSrc="/images/wadi-rum-hero.jpg"
        imageAlt="Wadi Rum desert landscape"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unforgettable Desert Experiences</h2>
              <p className="text-lg text-muted-foreground">
                Explore the stunning landscapes of Wadi Rum with our range of authentic Bedouin experiences
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper animation="slide-in-left" delay={100}>
              <ExperienceCard
                title="Jeep Tours"
                description="Explore the vast desert landscapes and iconic rock formations with our experienced Bedouin guides."
                imageSrc="/images/jeep-tour.jpg"
                link="/desert-experiences/jeep-tour"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-in" delay={200}>
              <ExperienceCard
                title="Desert Camping"
                description="Experience the magic of sleeping under the stars in traditional Bedouin camps with delicious local cuisine."
                imageSrc="/images/camping.jpg"
                link="/desert-experiences/camping"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" delay={300}>
              <ExperienceCard
                title="Hiking Adventures"
                description="Trek through canyons, climb sand dunes, and discover hidden gems in the Wadi Rum desert."
                imageSrc="/images/hiking.jpg"
                link="/desert-experiences/hiking"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-left" delay={400}>
              <ExperienceCard
                title="Rock Climbing"
                description="Challenge yourself with rock climbing experiences on the magnificent sandstone formations."
                imageSrc="/images/climbing.jpg"
                link="/desert-experiences/climbing"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-in" delay={500}>
              <ExperienceCard
                title="Scrambling"
                description="Enjoy the thrill of scrambling up rock faces and exploring the unique geological features."
                imageSrc="/images/scrambling.jpg"
                link="/desert-experiences/scrambling"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" delay={600}>
              <ExperienceCard
                title="Custom Adventures"
                description="Create your perfect desert experience with our customizable tour packages."
                imageSrc="/images/custom-tour.jpg"
                link="/contact-us"
              />
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/about-wadi-rum.jpg" alt="About Wadi Rum Heritage" fill className="object-cover" />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Wadi Rum Heritage</h2>
                <p className="text-lg mb-6">
                  Wadi Rum Heritage offers authentic desert experiences led by local Bedouin guides who have lived in
                  this magnificent landscape for generations. Our team is passionate about sharing the natural beauty,
                  rich culture, and ancient history of Wadi Rum with visitors from around the world.
                </p>
                <p className="text-lg mb-8">
                  We pride ourselves on sustainable tourism practices that respect the delicate desert ecosystem while
                  providing unforgettable adventures for our guests. From thrilling jeep tours to peaceful nights under
                  the stars, we create memories that will last a lifetime.
                </p>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="/about-us/who-we-are">Learn More About Us</Link>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Wadi Rum Heritage</h2>
              <p className="text-lg text-muted-foreground">
                Experience the difference with our authentic Bedouin hospitality and expert local knowledge
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <MapPin className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p>
                  Our guides are local Bedouins with deep knowledge of Wadi Rum's terrain, history, and culture,
                  ensuring an authentic experience.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Calendar className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p>We offer customizable tour durations and start times to fit your travel plans perfectly.</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Users className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Small Group Sizes</h3>
                <p>We keep our groups small to ensure personalized attention and a more intimate desert experience.</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Clock className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p>Our team is available around the clock to assist with any questions or special requests.</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Award className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
                <p>We provide high-quality camping gear, vehicles, and safety equipment for a comfortable adventure.</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Shield className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p>Your safety is our priority, with comprehensive safety protocols and experienced guides.</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert/10">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
              <p className="text-lg text-muted-foreground">
                Read testimonials from travelers who have experienced the magic of Wadi Rum with us
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <TestimonialCard
                quote="Our jeep tour with Wadi Rum Heritage was the highlight of our Jordan trip. The guides were knowledgeable and friendly, and the desert landscapes were breathtaking."
                author="Sarah Johnson"
                location="United Kingdom"
                rating={5}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <TestimonialCard
                quote="Spending the night in the desert camp was magical. The traditional food was delicious, and sleeping under the stars was an unforgettable experience."
                author="Michael Chen"
                location="Canada"
                rating={5}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <TestimonialCard
                quote="The hiking tour was perfectly organized. Our guide knew all the best spots and shared fascinating stories about Bedouin culture and history."
                author="Elena Kowalski"
                location="Germany"
                rating={4}
              />
            </AnimationWrapper>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-desert text-desert hover:bg-desert hover:text-white">
              <Link href="/about-us">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Desert Adventure?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to book your unforgettable Wadi Rum experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href="/contact-us">Contact Us</Link>
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

