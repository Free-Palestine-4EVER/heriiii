import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Thermometer, Wallet, Globe, Utensils, Shirt, AmbulanceIcon as FirstAid } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function UsefulInformationPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection
        title={dict.aboutUs.usefulInfo.hero.title}
        subtitle={dict.aboutUs.usefulInfo.hero.subtitle}
        backgroundImage="/images/useful-info-hero.jpg"
        mobileBackgroundImage="/images/useful-info-hero-mobile.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <Tabs defaultValue="planning" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="planning">
                  {dict.aboutUs.usefulInfo.tabs?.planning || "Planning Your Trip"}
                </TabsTrigger>
                <TabsTrigger value="weather">
                  {dict.aboutUs.usefulInfo.tabs?.weather || "Weather & Climate"}
                </TabsTrigger>
                <TabsTrigger value="culture">
                  {dict.aboutUs.usefulInfo.tabs?.culture || "Culture & Customs"}
                </TabsTrigger>
                <TabsTrigger value="health">{dict.aboutUs.usefulInfo.tabs?.health || "Health & Safety"}</TabsTrigger>
              </TabsList>

              <TabsContent value="planning" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.planning?.bestTime?.title || "Best Time to Visit"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        {dict.aboutUs.usefulInfo.planning?.bestTime?.intro || "The best times to visit Wadi Rum are:"}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.bestTime?.spring?.season || "Spring (March-May):"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.bestTime?.spring?.description ||
                              " Mild temperatures, occasional wildflowers"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.bestTime?.fall?.season || "Fall (September-November):"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.bestTime?.fall?.description ||
                              " Pleasant temperatures, clear skies"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.bestTime?.winter?.season ||
                                "Winter (December-February):"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.bestTime?.winter?.description ||
                              " Cool days, cold nights, fewer tourists"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.bestTime?.summer?.season || "Summer (June-August):"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.bestTime?.summer?.description ||
                              " Very hot days, warm nights"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.planning?.duration?.title || "Duration of Stay"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        {dict.aboutUs.usefulInfo.planning?.duration?.intro || "We recommend the following durations:"}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.duration?.halfDay?.title || "Half-day tour:"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.duration?.halfDay?.description ||
                              " 3-4 hours, see main attractions"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.duration?.fullDay?.title || "Full-day tour:"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.duration?.fullDay?.description ||
                              " 7-8 hours, more comprehensive experience"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.duration?.overnight?.title || "Overnight stay:"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.duration?.overnight?.description ||
                              " Experience sunset, stargazing, and sunrise"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>
                              {dict.aboutUs.usefulInfo.planning?.duration?.multiDay?.title || "2-3 days:"}
                            </strong>
                            {dict.aboutUs.usefulInfo.planning?.duration?.multiDay?.description ||
                              " Ideal for exploring remote areas and multiple activities"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.planning?.currency?.title || "Currency & Payments"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.currency?.currency ||
                              "The currency in Jordan is the Jordanian Dinar (JOD)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.currency?.exchange || "1 JOD ≈ 1.41 USD (approximate)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.currency?.cash || "Cash is preferred in Wadi Rum"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.currency?.atm ||
                              "No ATMs in Wadi Rum - withdraw cash before arriving"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.currency?.cards ||
                              "Credit cards accepted for advance bookings only"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.planning?.getting?.title || "Getting to Wadi Rum"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>{dict.aboutUs.usefulInfo.planning?.getting?.aqaba?.title || "From Aqaba:"}</strong>
                            {dict.aboutUs.usefulInfo.planning?.getting?.aqaba?.description || " 60 km (1 hour drive)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>{dict.aboutUs.usefulInfo.planning?.getting?.petra?.title || "From Petra:"}</strong>
                            {dict.aboutUs.usefulInfo.planning?.getting?.petra?.description || " 120 km (2 hour drive)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>{dict.aboutUs.usefulInfo.planning?.getting?.amman?.title || "From Amman:"}</strong>
                            {dict.aboutUs.usefulInfo.planning?.getting?.amman?.description || " 320 km (4 hour drive)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.getting?.public ||
                              "Public minibuses available from Aqaba and Petra"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.planning?.getting?.taxi ||
                              "Private taxis and transfers can be arranged"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="weather" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Thermometer className="h-5 w-5 mr-2 text-desert" />
                      {dict.aboutUs.usefulInfo.weather?.title || "Seasonal Weather in Wadi Rum"}
                    </CardTitle>
                    <CardDescription>
                      {dict.aboutUs.usefulInfo.weather?.description ||
                        "Wadi Rum has a desert climate with significant temperature variations between seasons and between day and night"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.weather?.spring?.title || "Spring (March-May)"}
                        </h3>
                        <ul className="space-y-1">
                          <li>• {dict.aboutUs.usefulInfo.weather?.spring?.day || "Daytime: 20-30°C (68-86°F)"}</li>
                          <li>• {dict.aboutUs.usefulInfo.weather?.spring?.night || "Nighttime: 10-15°C (50-59°F)"}</li>
                          <li>
                            • {dict.aboutUs.usefulInfo.weather?.spring?.rain || "Occasional rain showers in March"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.weather?.spring?.flowers || "Wildflowers may bloom after rain"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.weather?.summer?.title || "Summer (June-August)"}
                        </h3>
                        <ul className="space-y-1">
                          <li>• {dict.aboutUs.usefulInfo.weather?.summer?.day || "Daytime: 30-40°C (86-104°F)"}</li>
                          <li>• {dict.aboutUs.usefulInfo.weather?.summer?.night || "Nighttime: 20-25°C (68-77°F)"}</li>
                          <li>• {dict.aboutUs.usefulInfo.weather?.summer?.dry || "Very dry with intense sun"}</li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.weather?.summer?.humidity ||
                              "Low humidity makes heat more bearable"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.weather?.fall?.title || "Fall (September-November)"}
                        </h3>
                        <ul className="space-y-1">
                          <li>• {dict.aboutUs.usefulInfo.weather?.fall?.day || "Daytime: 20-30°C (68-86°F)"}</li>
                          <li>• {dict.aboutUs.usefulInfo.weather?.fall?.night || "Nighttime: 10-20°C (50-68°F)"}</li>
                          <li>
                            • {dict.aboutUs.usefulInfo.weather?.fall?.cooling || "Gradually cooling temperatures"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.weather?.fall?.clear || "Clear skies and excellent visibility"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.weather?.winter?.title || "Winter (December-February)"}
                        </h3>
                        <ul className="space-y-1">
                          <li>• {dict.aboutUs.usefulInfo.weather?.winter?.day || "Daytime: 10-20°C (50-68°F)"}</li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.weather?.winter?.night ||
                              "Nighttime: 0-5°C (32-41°F), occasionally below freezing"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.weather?.winter?.rain || "Possibility of rain and rare snow"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.weather?.winter?.clothing ||
                              "Extra warm clothing needed for nights"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                      <h3 className="font-semibold mb-2 text-amber-800">
                        {dict.aboutUs.usefulInfo.weather?.tips?.title || "Weather Tips"}
                      </h3>
                      <ul className="space-y-1 text-amber-700">
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.weather?.tips?.sun ||
                            "Always bring sun protection regardless of season"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.weather?.tips?.layers ||
                            "Pack layers for temperature changes, especially for overnight stays"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.weather?.tips?.jacket ||
                            "Bring a warm jacket for evenings, even in summer"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.weather?.tips?.water ||
                            "Stay hydrated - drink more water than you think you need"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.weather?.tips?.forecast ||
                            "Check weather forecasts before your trip"}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Utensils className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.culture?.etiquette?.title || "Bedouin Culture & Etiquette"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        {dict.aboutUs.usefulInfo.culture?.etiquette?.intro ||
                          "The Bedouin people are known for their hospitality and traditional way of life. When visiting:"}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.etiquette?.tea ||
                              "Accept tea or coffee when offered - it's a gesture of hospitality"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.etiquette?.shoes ||
                              "Remove shoes before entering tents or sitting areas with carpets"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.etiquette?.photos ||
                              "Ask permission before taking photos of local people"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.etiquette?.greeting ||
                              'Greet people with "As-salamu alaykum" (Peace be upon you)'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.etiquette?.eating ||
                              "Eat with your right hand if dining traditionally"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shirt className="h-5 w-5 mr-2 text-desert" />
                        {dict.aboutUs.usefulInfo.culture?.dress?.title || "Dress Code"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        {dict.aboutUs.usefulInfo.culture?.dress?.intro ||
                          "Jordan is a relatively liberal country, but respecting local customs is appreciated:"}
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.dress?.modest ||
                              "Dress modestly in public areas (shoulders and knees covered)"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.dress?.loose ||
                              "Lightweight, loose-fitting clothing is practical and respectful"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.dress?.hair ||
                              "Women are not required to cover their hair"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.dress?.casual ||
                              "More casual attire is acceptable in tourist areas and camps"}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            {dict.aboutUs.usefulInfo.culture?.dress?.swimwear ||
                              "Swimwear is only appropriate at private pools or beach resorts"}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>
                        {dict.aboutUs.usefulInfo.culture?.language?.title || "Language & Communication"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">
                            {dict.aboutUs.usefulInfo.culture?.language?.phrases?.title || "Basic Arabic Phrases"}
                          </h3>
                          <ul className="space-y-1">
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.phrases?.hello ||
                                "Hello: Marhaba (Mar-ha-ba)"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.phrases?.thanks ||
                                "Thank you: Shukran (Shoo-kran)"}
                            </li>
                            <li>• {dict.aboutUs.usefulInfo.culture?.language?.phrases?.yes || "Yes: Na'am (Na-am)"}</li>
                            <li>• {dict.aboutUs.usefulInfo.culture?.language?.phrases?.no || "No: La (La)"}</li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.phrases?.please ||
                                "Please: Min fadlak (Min fad-lak)"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.phrases?.excuse ||
                                "Excuse me: Afwan (Af-wan)"}
                            </li>
                            <li>
                              • {dict.aboutUs.usefulInfo.culture?.language?.phrases?.good || "Good: Tayeb (Tay-eb)"}
                            </li>
                            <li>
                              • {dict.aboutUs.usefulInfo.culture?.language?.phrases?.water || "Water: Ma'a (Ma-a)"}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">
                            {dict.aboutUs.usefulInfo.culture?.language?.tips?.title || "Communication Tips"}
                          </h3>
                          <ul className="space-y-1">
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.english ||
                                "English is widely spoken in tourist areas"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.guides ||
                                "Many Bedouin guides speak multiple languages"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.visual ||
                                "Visual communication and gestures are helpful"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.learning ||
                                "Learning a few Arabic phrases is appreciated"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.mobile ||
                                "Mobile coverage is limited in remote desert areas"}
                            </li>
                            <li>
                              •{" "}
                              {dict.aboutUs.usefulInfo.culture?.language?.tips?.maps ||
                                "Download offline maps before your trip"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="health" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FirstAid className="h-5 w-5 mr-2 text-desert" />
                      {dict.aboutUs.usefulInfo.health?.title || "Health & Safety Information"}
                    </CardTitle>
                    <CardDescription>
                      {dict.aboutUs.usefulInfo.health?.description ||
                        "Wadi Rum is generally safe, but the desert environment requires some precautions"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.health?.sun?.title || "Sun Protection"}
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.sun?.sunscreen ||
                              "Use high SPF sunscreen and reapply frequently"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.health?.sun?.hat || "Wear a wide-brimmed hat and sunglasses"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.health?.sun?.cover || "Cover exposed skin during peak sun hours"}
                          </li>
                          <li>• {dict.aboutUs.usefulInfo.health?.sun?.shade || "Seek shade when possible"}</li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.sun?.cloudy ||
                              "The desert sun is intense even on cloudy days"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.health?.hydration?.title || "Hydration"}
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.hydration?.amount ||
                              "Drink at least 2-3 liters of water per day"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.health?.hydration?.bottle || "Bring a reusable water bottle"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.hydration?.alcohol ||
                              "Avoid excessive alcohol which causes dehydration"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.hydration?.signs ||
                              "Recognize signs of dehydration: headache, dizziness"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.hydration?.electrolytes ||
                              "Electrolyte packets can be helpful"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.health?.medical?.title || "Medical Considerations"}
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.medical?.medications ||
                              "Bring any personal medications you need"}
                          </li>
                          <li>• {dict.aboutUs.usefulInfo.health?.medical?.firstAid || "Pack a basic first aid kit"}</li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.medical?.facilities ||
                              "Medical facilities are limited in Wadi Rum"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.medical?.hospitals ||
                              "Nearest hospitals are in Aqaba (60km)"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.medical?.insurance ||
                              "Travel insurance with evacuation coverage is recommended"}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {dict.aboutUs.usefulInfo.health?.safety?.title || "General Safety"}
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.safety?.guide || "Always follow your guide's instructions"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.health?.safety?.wander || "Don't wander off alone in the desert"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.safety?.footwear ||
                              "Wear appropriate footwear for activities"}
                          </li>
                          <li>
                            • {dict.aboutUs.usefulInfo.health?.safety?.climbing || "Be cautious when climbing rocks"}
                          </li>
                          <li>
                            •{" "}
                            {dict.aboutUs.usefulInfo.health?.safety?.floods ||
                              "Flash floods can occur after rain - avoid wadis"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <h3 className="font-semibold mb-2 text-blue-800">
                        {dict.aboutUs.usefulInfo.health?.emergency?.title || "Emergency Information"}
                      </h3>
                      <ul className="space-y-1 text-blue-700">
                        <li>• {dict.aboutUs.usefulInfo.health?.emergency?.number || "Jordan Emergency Number: 911"}</li>
                        <li>• {dict.aboutUs.usefulInfo.health?.emergency?.police || "Police: 191"}</li>
                        <li>• {dict.aboutUs.usefulInfo.health?.emergency?.ambulance || "Ambulance: 193"}</li>
                        <li>
                          • {dict.aboutUs.usefulInfo.health?.emergency?.guide || "Save your guide's phone number"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.health?.emergency?.maps ||
                            "Download offline maps with GPS coordinates"}
                        </li>
                        <li>
                          •{" "}
                          {dict.aboutUs.usefulInfo.health?.emergency?.itinerary ||
                            "Inform someone of your itinerary before remote trips"}
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

