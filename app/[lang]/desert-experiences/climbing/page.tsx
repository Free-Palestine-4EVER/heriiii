import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Clock, Users, Shield, Award, Compass } from "lucide-react"
import { getDictionary } from "@/dictionaries"

export default async function ClimbingPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.climbing.hero.title}
        subtitle={dict.climbing.hero.subtitle}
        backgroundImage="/images/climbing-hero.jpg"
        mobileBackgroundImage="/images/climbing-hero-image-mobile.jpg"
        imageAlt="Rock climbing in Wadi Rum desert"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {dict.climbing.intro?.title || "Rock Climbing Adventures"}
                </h2>
                <p className="text-lg mb-4">
                  {dict.climbing.intro?.paragraph1 ||
                    "Wadi Rum offers some of the most spectacular rock climbing in the world. The towering sandstone formations provide a unique climbing experience with routes suitable for all levels, from beginners to experienced climbers."}
                </p>
                <p className="text-lg mb-4">
                  {dict.climbing.intro?.paragraph2 ||
                    "Our experienced climbing guides will ensure your safety while helping you push your limits and enjoy the thrill of scaling these magnificent desert mountains. As you climb, you'll be rewarded with breathtaking views of the vast desert landscape."}
                </p>
                <p className="text-lg mb-6">
                  {dict.climbing.intro?.paragraph3 ||
                    "Whether you're looking to try climbing for the first time or you're an experienced climber seeking new challenges, our climbing experiences can be tailored to your skill level and interests."}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Mountain className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.climbing.intro?.features?.levels || "Various difficulty levels"}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.climbing.intro?.features?.duration || "Half-day to full-day options"}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.climbing.intro?.features?.groups || "Small groups"}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-desert mr-2" />
                    <span>{dict.climbing.intro?.features?.equipment || "Professional equipment"}</span>
                  </div>
                </div>
                <Button asChild className="bg-desert hover:bg-desert-dark">
                  <Link href="#climbing-options">{dict.climbing.intro?.buttonText || "View Climbing Options"}</Link>
                </Button>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/climbing-detail.jpg"
                  alt="Rock Climbing in Wadi Rum"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light" id="climbing-options">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.climbing.options?.title || "Our Climbing Experiences"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.climbing.options?.subtitle || "Choose from our range of guided climbing adventures in Wadi Rum"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <Card className="h-full">
                <div className="relative h-48">
                  <Image
                    src="/images/beginner-climbing.jpg"
                    alt="Beginner Climbing Experience"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dict.climbing.options?.beginner?.title || "Beginner Climbing Experience"}</CardTitle>
                  <CardDescription>
                    {dict.climbing.options?.beginner?.description || "Perfect introduction to rock climbing"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {dict.climbing.options?.beginner?.intro || "This beginner-friendly experience includes:"}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.climbing.options?.beginner?.feature1 || "Basic climbing techniques instruction"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.beginner?.feature2 || "Easy routes on smaller formations"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.beginner?.feature3 || "All necessary equipment provided"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.beginner?.feature4 || "3-4 hour guided session"}</span>
                    </li>
                  </ul>
                  <p className="font-semibold">{dict.climbing.options?.beginner?.price || "From 60 JOD per person"}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <Card className="h-full">
                <div className="relative h-48">
                  <Image
                    src="/images/intermediate-climbing.jpg"
                    alt="Intermediate Climbing Adventure"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>
                    {dict.climbing.options?.intermediate?.title || "Intermediate Climbing Adventure"}
                  </CardTitle>
                  <CardDescription>
                    {dict.climbing.options?.intermediate?.description || "For those with some climbing experience"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {dict.climbing.options?.intermediate?.intro || "This intermediate experience features:"}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.intermediate?.feature1 || "More challenging routes"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.intermediate?.feature2 || "Advanced technique guidance"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.intermediate?.feature3 || "Full-day climbing experience"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.intermediate?.feature4 || "Lunch and refreshments included"}</span>
                    </li>
                  </ul>
                  <p className="font-semibold">
                    {dict.climbing.options?.intermediate?.price || "From 85 JOD per person"}
                  </p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <Card className="h-full">
                <div className="relative h-48">
                  <Image
                    src="/images/advanced-climbing.jpg"
                    alt="Advanced Multi-Pitch Climbing"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dict.climbing.options?.advanced?.title || "Advanced Multi-Pitch Climbing"}</CardTitle>
                  <CardDescription>
                    {dict.climbing.options?.advanced?.description || "For experienced climbers seeking a challenge"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {dict.climbing.options?.advanced?.intro || "This advanced climbing experience includes:"}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.climbing.options?.advanced?.feature1 || "Multi-pitch routes on major formations"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.advanced?.feature2 || "Full-day or multi-day options"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.advanced?.feature3 || "Spectacular summit views"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.climbing.options?.advanced?.feature4 || "Professional climbing guide"}</span>
                    </li>
                  </ul>
                  <p className="font-semibold">{dict.climbing.options?.advanced?.price || "From 120 JOD per person"}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-desert hover:bg-desert-dark">
              <Link href={`/${lang}/contact-us`}>
                {dict.climbing.options?.buttonText || "Book Your Climbing Adventure"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.climbing.why?.title || "Why Climb in Wadi Rum"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.climbing.why?.subtitle || "What makes Wadi Rum a world-class climbing destination"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Mountain className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.climbing.why?.sandstone?.title || "Unique Sandstone"}</h3>
                <p>
                  {dict.climbing.why?.sandstone?.description ||
                    "The red sandstone formations of Wadi Rum offer a unique climbing experience with excellent friction and distinctive features not found in other climbing destinations."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Compass className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.climbing.why?.routes?.title || "Diverse Routes"}</h3>
                <p>
                  {dict.climbing.why?.routes?.description ||
                    "From single-pitch climbs to multi-day big wall adventures, Wadi Rum offers a wide variety of routes for all skill levels and climbing styles."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Award className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.climbing.why?.setting?.title || "Spectacular Setting"}</h3>
                <p>
                  {dict.climbing.why?.setting?.description ||
                    "Climb surrounded by breathtaking desert landscapes, with panoramic views that make every ascent a memorable adventure."}
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {dict.climbing.cta?.title || "Ready to Scale the Heights of Wadi Rum?"}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {dict.climbing.cta?.subtitle ||
                "Contact us today to book your climbing adventure in this magnificent desert landscape"}
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

