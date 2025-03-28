import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Moon, Coffee, Utensils, Music, Sunrise, Sunset } from "lucide-react"
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
        mobileBackgroundImage="/images/camping-hero-image-mobile.jpg"
        imageAlt="Camping in Wadi Rum desert"
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

      <section className="py-16 md:py-24 bg-sand-light" id="camping-options">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.camping.options?.title || "Our Camping Experiences"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.camping.options?.subtitle || "Choose from our authentic desert camping options"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationWrapper delay={100}>
              <Card className="h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/traditional-camp.jpg"
                    alt="Traditional Bedouin Camp"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dict.camping.options?.traditional?.title || "Traditional Bedouin Camp"}</CardTitle>
                  <CardDescription>
                    {dict.camping.options?.traditional?.description || "Experience authentic Bedouin hospitality"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {dict.camping.options?.traditional?.features_intro || "Our traditional Bedouin camps feature:"}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.camping.options?.traditional?.feature1 || "Comfortable mattresses with clean bedding"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.camping.options?.traditional?.feature2 || "Traditional Bedouin dinner and breakfast"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.camping.options?.traditional?.feature3 || "Shared bathroom facilities"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.camping.options?.traditional?.feature4 || "Evening entertainment with Bedouin music"}
                      </span>
                    </li>
                  </ul>
                  <p className="font-semibold">
                    {dict.camping.options?.traditional?.price || "From 55 JOD per person"}
                  </p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <Card className="h-full">
                <div className="relative h-64">
                  <Image
                    src="/images/desert-camping.jpg"
                    alt="Desert Camping Experience"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dict.camping.options?.desert?.title || "Desert Camping Experience"}</CardTitle>
                  <CardDescription>
                    {dict.camping.options?.desert?.description || "Camp under the stars in the heart of Wadi Rum"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    {dict.camping.options?.desert?.features_intro || "Our desert camping experience includes:"}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.camping.options?.desert?.feature1 || "Private tents with comfortable bedding"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.camping.options?.desert?.feature2 || "Authentic Bedouin meals cooked over fire"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>{dict.camping.options?.desert?.feature3 || "Clean bathroom facilities"}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-desert font-bold mr-2">•</span>
                      <span>
                        {dict.camping.options?.desert?.feature4 || "Spectacular remote location away from crowds"}
                      </span>
                    </li>
                  </ul>
                  <p className="font-semibold">{dict.camping.options?.desert?.price || "From 65 JOD per person"}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-desert hover:bg-desert-dark">
              <Link href={`/${lang}/contact-us`}>
                {dict.camping.options?.button || "Book Your Desert Camping Experience"}
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
                {dict.camping.experience?.title || "The Desert Camp Experience"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.camping.experience?.subtitle || "What to expect during your night in Wadi Rum"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Sunset className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.camping.experience?.sunset?.title || "Sunset Views"}</h3>
                <p>
                  {dict.camping.experience?.sunset?.description ||
                    "Watch the desert transform as the sun sets, painting the sandstone mountains in shades of red, orange, and gold. Our camps are positioned to offer spectacular sunset views."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Utensils className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {dict.camping.experience?.cuisine?.title || "Traditional Cuisine"}
                </h3>
                <p>
                  {dict.camping.experience?.cuisine?.description ||
                    "Enjoy authentic Bedouin cuisine, including zarb (meat and vegetables cooked underground), fresh salads, hummus, and traditional bread baked in the desert."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Star className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.camping.experience?.stargazing?.title || "Stargazing"}</h3>
                <p>
                  {dict.camping.experience?.stargazing?.description ||
                    "Experience the desert night sky like never before. With no light pollution, Wadi Rum offers one of the best stargazing opportunities in the world."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Music className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.camping.experience?.music?.title || "Bedouin Music"}</h3>
                <p>
                  {dict.camping.experience?.music?.description ||
                    "Listen to traditional Bedouin music around the campfire as our hosts share stories and songs that have been passed down through generations."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Coffee className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.camping.experience?.tea?.title || "Desert Tea"}</h3>
                <p>
                  {dict.camping.experience?.tea?.description ||
                    "Savor the unique flavor of Bedouin tea, brewed with desert herbs and sweetened with sugar, a traditional symbol of hospitality in Bedouin culture."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Sunrise className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {dict.camping.experience?.sunrise?.title || "Desert Sunrise"}
                </h3>
                <p>
                  {dict.camping.experience?.sunrise?.description ||
                    "Wake up to a breathtaking desert sunrise, as the first light of day illuminates the vast landscape, creating a magical start to your day."}
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
              {dict.camping.cta?.title || "Ready for Your Desert Adventure?"}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {dict.camping.cta?.subtitle ||
                "Book your camping experience today and create memories that will last a lifetime"}
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

