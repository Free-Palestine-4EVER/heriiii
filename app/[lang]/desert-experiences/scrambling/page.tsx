import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mountain, Clock, Users, Shield, Camera } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function ScramblingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.scrambling.hero.title}
        subtitle={dict.scrambling.hero.subtitle}
        backgroundImage="/images/scrambling-hero.jpg"
        mobileBackgroundImage="/images/scrambling-hero-image-mobile.jpg"
        imageAlt="Scrambling in Wadi Rum desert"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                {dict.scrambling.intro?.paragraph1 ||
                  "Scrambling in Wadi Rum is a unique experience that combines hiking with some easy climbing. It's perfect for adventurous travelers who want to explore the desert's most spectacular rock formations up close."}
              </p>

              <p className="text-lg mb-6">
                {dict.scrambling.intro?.paragraph2 ||
                  "Our scrambling tours take you to iconic locations like Jebel Burdah Rock Bridge and Um Fruth Rock Bridge, where you'll climb up natural rock formations with the guidance of experienced Bedouin guides who know every handhold and foothold."}
              </p>

              <p className="text-lg mb-6">
                {dict.scrambling.intro?.paragraph3 ||
                  "No technical climbing equipment is needed - just a good pair of hiking shoes, a sense of adventure, and a reasonable level of fitness. Your guide will always ensure your safety while helping you reach viewpoints that few visitors get to experience."}
              </p>

              <p className="text-lg mb-8">
                {dict.scrambling.intro?.paragraph4 ||
                  "The reward for your efforts? Breathtaking panoramic views of the desert landscape and a sense of achievement that will stay with you long after your visit to Wadi Rum."}
              </p>

              <div className="text-center mb-12">
                <Button
                  asChild
                  className="bg-desert hover:bg-desert-dark text-white px-8 py-6 text-lg"
                  id="book-scrambling"
                >
                  <Link href={`/${lang}/contact-us`}>
                    {dict.scrambling.intro?.buttonText || "BOOK A SCRAMBLING TOUR"}
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.scrambling.features?.duration?.title || "Duration"}</h3>
                  <p>{dict.scrambling.features?.duration?.value || "2 to 6 hours"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Mountain className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.scrambling.features?.difficulty?.title || "Difficulty"}</h3>
                  <p>{dict.scrambling.features?.difficulty?.value || "Easy to Medium"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.scrambling.features?.groupSize?.title || "Group size"}</h3>
                  <p>{dict.scrambling.features?.groupSize?.value || "1 to 6 people"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.scrambling.features?.guide?.title || "Guide"}</h3>
                  <p>{dict.scrambling.features?.guide?.value || "1 Bedouin"}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Camera className="h-12 w-12 text-desert mb-4" />
                  <h3 className="font-bold mb-2">{dict.scrambling.features?.photoSpots?.title || "Photo spots"}</h3>
                  <p>{dict.scrambling.features?.photoSpots?.value || "Spectacular"}</p>
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
                {dict.scrambling.tours?.title || "Our Scrambling Tours"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.scrambling.tours?.subtitle ||
                  "Choose from our range of guided scrambling experiences in Wadi Rum"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image src="/images/jebel-hash.jpg" alt="Jebel Hash" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelHash?.difficulty || "EASY"}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelHash?.duration || "3-5 hours"}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelHash?.price || "0 JOD"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{dict.scrambling.tours?.jebelHash?.title || "Jebel Hash"}</h3>
                  <p className="mb-4">
                    {dict.scrambling.tours?.jebelHash?.description ||
                      "This group of peaks is located in the south-eastern part of the Wadi Rum desert. From the eastern side of Wadi Nughra, many paths lead to the summit from where you can reach other high points and enjoy incredible views over much of the desert and also over the first row of mountains in Saudi Arabia."}
                  </p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={`/${lang}/contact-us`}>
                      {dict.scrambling.tours?.bookButton || "BOOK THIS SCRAMBLING"}
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image src="/images/burdah-arch.jpg" alt="Burdah Arch" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 font-bold">
                    {dict.scrambling.tours?.burdahArch?.difficulty || "MEDIUM"}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.burdahArch?.duration || "2-3 hours"}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.burdahArch?.price || "40 JOD"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {dict.scrambling.tours?.burdahArch?.title || "Burdah Arch"}
                  </h3>
                  <p className="mb-4">
                    {dict.scrambling.tours?.burdahArch?.description ||
                      "A 3.5 km long mountain with a large arch. This climb requires some climbing skills as several passages are level 3 and quite vertiginous. At the top, the view over the desert is breathtaking. It is possible to walk on the arch itself, which is only 2 or 3 metres wide."}
                  </p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={`/${lang}/contact-us`}>
                      {dict.scrambling.tours?.bookButton || "BOOK THIS SCRAMBLING"}
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image src="/images/jebel-um-eddami.jpg" alt="Jebel um e'ddami" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelUmEddami?.difficulty || "EASY/MEDIUM"}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelUmEddami?.duration || "4-6 hours"}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.jebelUmEddami?.price || "50 JOD"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {dict.scrambling.tours?.jebelUmEddami?.title || "Jebel um e'ddami"}
                  </h3>
                  <p className="mb-4">
                    {dict.scrambling.tours?.jebelUmEddami?.description ||
                      "The highest peak in Jordan (1865 metres). This mountain is on the border of Wadi Rum, past the south-eastern end of the desert. It is quite a long way to reach the bottom of the mountain and start the ascent. From the top you will have a 360 degree panoramic view of the desert, the Saudi mountains and, if the weather is clear, you can even see the Red Sea!"}
                  </p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={`/${lang}/contact-us`}>
                      {dict.scrambling.tours?.bookButton || "BOOK THIS SCRAMBLING"}
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64">
                  <Image src="/images/canyon-rakabat.jpg" alt="Canyon Rakabat" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 font-bold">
                    {dict.scrambling.tours?.canyonRakabat?.difficulty || "MEDIUM"}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.canyonRakabat?.duration || "2h/2h30"}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-1 font-bold">
                    {dict.scrambling.tours?.canyonRakabat?.price || "50 JOD"}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {dict.scrambling.tours?.canyonRakabat?.title || "Canyon Rakabat"}
                  </h3>
                  <p className="mb-4">
                    {dict.scrambling.tours?.canyonRakabat?.description ||
                      "Crossing Jebel Um Uishrin, this narrow path starts at Rum Village and joins the other side of the mountain, behind a high sand dune (quite close to the very famous Red Sand Dune). The route is exclusively rocky and there are a few moments that will be difficult if you suffer from vertigo. This hike can be done at the beginning of your stay or before returning to the village."}
                  </p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Link href={`/${lang}/contact-us`}>
                      {dict.scrambling.tours?.bookButton || "BOOK THIS SCRAMBLING"}
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.scrambling.equipment?.title || "What to Bring"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {dict.scrambling.equipment?.subtitle || "Essential items for your scrambling adventure"}
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-2">
                  {dict.scrambling.equipment?.footwear?.title || "Proper Footwear"}
                </h3>
                <p>
                  {dict.scrambling.equipment?.footwear?.description ||
                    "Sturdy hiking shoes or boots with good grip are essential for scrambling. The sandstone can be slippery and proper footwear will help you maintain traction on the rock surfaces."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-2">
                  {dict.scrambling.equipment?.sunProtection?.title || "Sun Protection"}
                </h3>
                <p>
                  {dict.scrambling.equipment?.sunProtection?.description ||
                    "The desert sun can be intense. Bring sunscreen, a hat, and sunglasses. Consider wearing lightweight, long-sleeved clothing for additional protection."}
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-2">
                  {dict.scrambling.equipment?.water?.title || "Water & Snacks"}
                </h3>
                <p>
                  {dict.scrambling.equipment?.water?.description ||
                    "Stay hydrated! Bring at least 1.5 liters of water per person for a half-day scrambling adventure. Energy-rich snacks will help keep your strength up during the activity."}
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
              {dict.scrambling.cta?.title || "Ready for an Exciting Desert Adventure?"}
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              {dict.scrambling.cta?.subtitle ||
                "Book your scrambling experience today and discover the hidden treasures of Wadi Rum"}
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

