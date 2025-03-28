import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ExperienceCard from "@/components/experience-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimationWrapper from "@/components/animation-wrapper"
import { MapPin, Calendar, Users, Clock, Award, Shield } from "lucide-react"
import { getDictionary } from "@/dictionaries"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        backgroundImage="/images/home-hero-image-desktop.jpg"
        mobileBackgroundImage="/images/home-hero-image-mobile.jpg"
        imageAlt="Wadi Rum desert landscape"
      />

      {/* Bedouin Experience Section - Using dictionary translations */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:pl-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#FF8A00]">{dict.home.beduinExperience.discoverText}</span>{" "}
                {dict.home.beduinExperience.uniqueText}
                <br />
                {dict.home.beduinExperience.experienceText}{" "}
                <span className="text-[#FF8A00]">{dict.home.beduinExperience.withBeduinsText}</span>
              </h2>
              <p className="text-lg mb-8 text-gray-700">{dict.home.beduinExperience.description}</p>
              <div className="flex items-center">
                <a
                  href="#experiences"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#FF8A00] text-white font-medium rounded-md hover:bg-[#E67E00] transition-colors"
                >
                  {dict.home.beduinExperience.viewButton}
                </a>
              </div>
            </div>
            <div className="relative lg:pr-8">
              <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/beduin-experience.jpg"
                  alt="Couple by campfire in Wadi Rum"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.home.experiences.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.home.experiences.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper animation="slide-in-left" delay={100}>
              <ExperienceCard
                title={dict.home.experiences.jeepTours.title}
                description={dict.home.experiences.jeepTours.description}
                imageSrc="/images/jeep-tour.jpg"
                link={`/${lang}/desert-experiences/jeep-tour`}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-in" delay={200}>
              <ExperienceCard
                title={dict.home.experiences.camping.title}
                description={dict.home.experiences.camping.description}
                imageSrc="/images/camping.jpg"
                link={`/${lang}/desert-experiences/camping`}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" delay={300}>
              <ExperienceCard
                title={dict.home.experiences.hiking.title}
                description={dict.home.experiences.hiking.description}
                imageSrc="/images/hiking.jpg"
                link={`/${lang}/desert-experiences/hiking`}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-left" delay={400}>
              <ExperienceCard
                title={dict.home.experiences.climbing.title}
                description={dict.home.experiences.climbing.description}
                imageSrc="/images/climbing.jpg"
                link={`/${lang}/desert-experiences/climbing`}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="fade-in" delay={500}>
              <ExperienceCard
                title={dict.home.experiences.scrambling.title}
                description={dict.home.experiences.scrambling.description}
                imageSrc="/images/scrambling.jpg"
                link={`/${lang}/desert-experiences/scrambling`}
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" delay={600}>
              <ExperienceCard
                title={dict.home.experiences.custom.title}
                description={dict.home.experiences.custom.description}
                imageSrc="/images/custom-tour.jpg"
                link={`/${lang}/contact-us`}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.home.about.title}</h2>
                <p className="text-lg mb-6">{dict.home.about.paragraph1}</p>
                <p className="text-lg mb-8">{dict.home.about.paragraph2}</p>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href={`/${lang}/about-us/who-we-are`}>{dict.home.about.buttonText}</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.home.whyChoose.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.home.whyChoose.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <MapPin className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.localExpertise.title}</h3>
                <p>{dict.home.whyChoose.localExpertise.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Calendar className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.flexibleScheduling.title}</h3>
                <p>{dict.home.whyChoose.flexibleScheduling.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Users className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.smallGroups.title}</h3>
                <p>{dict.home.whyChoose.smallGroups.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Clock className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.support.title}</h3>
                <p>{dict.home.whyChoose.support.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Award className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.equipment.title}</h3>
                <p>{dict.home.whyChoose.equipment.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Shield className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.home.whyChoose.safety.title}</h3>
                <p>{dict.home.whyChoose.safety.description}</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Outdoor Adventures Stats Section */}
      <section className="relative py-16 md:py-24 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/starry-night-adventure.jpg"
            alt="Starry night in Wadi Rum"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{dict.home.outdoorAdventures.title}</h2>
            <p className="text-lg md:text-xl">{dict.home.outdoorAdventures.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold mb-2">30</span>
              <span className="text-sm md:text-base text-center">{dict.home.outdoorAdventures.uniqueCamping}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold mb-2">2000+</span>
              <span className="text-sm md:text-base text-center">
                {dict.home.outdoorAdventures.satisfiedAdventurers}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold mb-2">500+</span>
              <span className="text-sm md:text-base text-center">
                {dict.home.outdoorAdventures.adventuresCompleted}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold mb-2">15</span>
              <span className="text-sm md:text-base text-center">{dict.home.outdoorAdventures.scenicRoutes}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert/10">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.home.testimonials.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.home.testimonials.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <TestimonialCard
                quote={dict.home.testimonials.testimonial1.quote}
                author={dict.home.testimonials.testimonial1.author}
                location={dict.home.testimonials.testimonial1.location}
                rating={5}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <TestimonialCard
                quote={dict.home.testimonials.testimonial2.quote}
                author={dict.home.testimonials.testimonial2.author}
                location={dict.home.testimonials.testimonial2.location}
                rating={5}
              />
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <TestimonialCard
                quote={dict.home.testimonials.testimonial3.quote}
                author={dict.home.testimonials.testimonial3.author}
                location={dict.home.testimonials.testimonial3.location}
                rating={5} // Changed from 4 to 5 stars
              />
            </AnimationWrapper>
          </div>

          {/* Removed "Read more reviews" button */}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.home.cta.title}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{dict.home.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href={`/${lang}/contact-us`}>{dict.home.cta.contactUs}</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-black">
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                >
                  {dict.home.cta.whatsappUs}
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

