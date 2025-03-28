import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function FAQPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.aboutUs.faq.hero.title}
        subtitle={dict.aboutUs.faq.hero.subtitle}
        backgroundImage="/images/faq-hero-image.jpg"
        mobileBackgroundImage="/images/faq-hero-image-mobile.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.bestTime?.question || "What is the best time to visit Wadi Rum?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.bestTime?.answer ||
                        "The best time to visit Wadi Rum is during spring (March to May) and autumn (September to November) when temperatures are moderate. Summer (June to August) can be extremely hot during the day, though nights are cooler. Winter (December to February) offers mild daytime temperatures but can be very cold at night, sometimes dropping below freezing."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.getting?.question || "How do I get to Wadi Rum?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.getting?.answer1 ||
                        "Wadi Rum is located about 60 km east of Aqaba and 120 km south of Petra. You can reach Wadi Rum by:"}
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        {dict.aboutUs.faq.questions?.getting?.option1 ||
                          "Private car or taxi from Aqaba (1 hour) or Petra (2 hours)"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.getting?.option2 ||
                          "Public minibus from Aqaba or Petra to Wadi Rum village"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.getting?.option3 || "Organized tour from major cities in Jordan"}
                      </li>
                    </ul>
                    <p className="mt-2">
                      {dict.aboutUs.faq.questions?.getting?.answer2 ||
                        "We can also arrange transportation from your hotel in Aqaba or Petra upon request."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.packing?.question || "What should I pack for a desert trip?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{dict.aboutUs.faq.questions?.packing?.intro || "We recommend bringing:"}</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>{dict.aboutUs.faq.questions?.packing?.item1 || "Comfortable, loose-fitting clothing"}</li>
                      <li>
                        {dict.aboutUs.faq.questions?.packing?.item2 ||
                          "Layers for temperature changes (especially if staying overnight)"}
                      </li>
                      <li>{dict.aboutUs.faq.questions?.packing?.item3 || "Sturdy walking shoes or hiking boots"}</li>
                      <li>
                        {dict.aboutUs.faq.questions?.packing?.item4 || "Sun protection: hat, sunglasses, sunscreen"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.packing?.item5 ||
                          "Water bottle (we provide water, but bringing your own bottle is environmentally friendly)"}
                      </li>
                      <li>{dict.aboutUs.faq.questions?.packing?.item6 || "Camera"}</li>
                      <li>{dict.aboutUs.faq.questions?.packing?.item7 || "Small backpack for personal items"}</li>
                      <li>
                        {dict.aboutUs.faq.questions?.packing?.item8 ||
                          "Warm clothing for evenings (even in summer, desert nights can be cool)"}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.booking?.question || "Do I need to book tours in advance?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.booking?.answer ||
                        "Yes, we recommend booking your tour in advance, especially during the high season (March-May and September-November). This ensures availability and allows us to prepare properly for your visit. However, last-minute bookings are sometimes possible depending on availability."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.facilities?.question ||
                      "What facilities are available at the desert camps?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{dict.aboutUs.faq.questions?.facilities?.intro || "Our desert camps include:"}</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        {dict.aboutUs.faq.questions?.facilities?.item1 ||
                          "Traditional Bedouin tents with mattresses, blankets, and pillows"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.facilities?.item2 ||
                          "Shared bathroom facilities with toilets and sometimes showers"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.facilities?.item3 ||
                          "Dining area where traditional meals are served"}
                      </li>
                      <li>{dict.aboutUs.faq.questions?.facilities?.item4 || "Campfire area for evening gatherings"}</li>
                    </ul>
                    <p className="mt-2">
                      {dict.aboutUs.faq.questions?.facilities?.conclusion ||
                        "The camps are basic but comfortable, offering an authentic desert experience."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.safety?.question || "Is Wadi Rum safe for tourists?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.safety?.answer ||
                        "Yes, Wadi Rum is generally very safe for tourists. The Bedouin communities are known for their hospitality and take great care of visitors. Our guides are experienced professionals who prioritize your safety. As with any travel destination, it's always good to take normal precautions with your belongings."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.food?.question || "What food is served during the tours?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.food?.intro ||
                        "We serve traditional Bedouin cuisine, which typically includes:"}
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        {dict.aboutUs.faq.questions?.food?.item1 || "Zarb (meat and vegetables cooked underground)"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.food?.item2 || "Mansaf (lamb cooked in yogurt sauce with rice)"}
                      </li>
                      <li>
                        {dict.aboutUs.faq.questions?.food?.item3 ||
                          "Maqluba (upside-down rice dish with vegetables and meat)"}
                      </li>
                      <li>{dict.aboutUs.faq.questions?.food?.item4 || "Fresh salads, hummus, and other mezze"}</li>
                      <li>{dict.aboutUs.faq.questions?.food?.item5 || "Bedouin tea and Arabic coffee"}</li>
                    </ul>
                    <p className="mt-2">
                      {dict.aboutUs.faq.questions?.food?.dietary ||
                        "Vegetarian options are available upon request. Please inform us of any dietary restrictions when booking."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.charging?.question || "Can I charge my phone/camera in the desert?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.charging?.answer ||
                        "Most camps have limited electricity, usually from solar panels or generators that run for a few hours in the evening. We recommend bringing fully charged devices and a power bank for additional charging needs. Some camps may have charging stations in common areas."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.payment?.question || "What payment methods do you accept?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.payment?.answer ||
                        "We accept cash payments in Jordanian Dinars (JOD). Some tours can be paid for by credit card in advance, but please note that in the desert itself, cash is the primary payment method. There are no ATMs in Wadi Rum village, so we recommend bringing enough cash with you."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-lg font-medium">
                    {dict.aboutUs.faq.questions?.internet?.question || "Is there internet/mobile coverage in Wadi Rum?"}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      {dict.aboutUs.faq.questions?.internet?.answer ||
                        "Mobile coverage in Wadi Rum is limited and varies depending on your location in the desert. The village area has reasonable coverage, but once you venture deeper into the desert, signal becomes sporadic or non-existent. Most camps do not offer Wi-Fi. This is a perfect opportunity to disconnect and fully immerse yourself in the desert experience."}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

