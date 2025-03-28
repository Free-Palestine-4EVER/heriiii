import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Thermometer, Wallet, Globe, Utensils, Shirt, AmbulanceIcon as FirstAid } from "lucide-react"

export default function UsefulInformationPage() {
  return (
    <>
      <HeroSection
        title="Useful Information"
        subtitle="Everything you need to know for your visit to Wadi Rum"
        backgroundImage="/images/useful-info-hero.jpg"
        mobileBackgroundImage="/images/useful-info-hero-mobile.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <Tabs defaultValue="planning" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="planning">Planning Your Trip</TabsTrigger>
                <TabsTrigger value="weather">Weather & Climate</TabsTrigger>
                <TabsTrigger value="culture">Culture & Customs</TabsTrigger>
                <TabsTrigger value="health">Health & Safety</TabsTrigger>
              </TabsList>

              <TabsContent value="planning" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-desert" />
                        Best Time to Visit
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">The best times to visit Wadi Rum are:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Spring (March-May):</strong> Mild temperatures, occasional wildflowers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Fall (September-November):</strong> Pleasant temperatures, clear skies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Winter (December-February):</strong> Cool days, cold nights, fewer tourists
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Summer (June-August):</strong> Very hot days, warm nights
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-desert" />
                        Duration of Stay
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">We recommend the following durations:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Half-day tour:</strong> 3-4 hours, see main attractions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Full-day tour:</strong> 7-8 hours, more comprehensive experience
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>Overnight stay:</strong> Experience sunset, stargazing, and sunrise
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>2-3 days:</strong> Ideal for exploring remote areas and multiple activities
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-desert" />
                        Currency & Payments
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>The currency in Jordan is the Jordanian Dinar (JOD)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>1 JOD ≈ 1.41 USD (approximate)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Cash is preferred in Wadi Rum</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>No ATMs in Wadi Rum - withdraw cash before arriving</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Credit cards accepted for advance bookings only</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-desert" />
                        Getting to Wadi Rum
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>From Aqaba:</strong> 60 km (1 hour drive)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>From Petra:</strong> 120 km (2 hour drive)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>
                            <strong>From Amman:</strong> 320 km (4 hour drive)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Public minibuses available from Aqaba and Petra</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Private taxis and transfers can be arranged</span>
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
                      Seasonal Weather in Wadi Rum
                    </CardTitle>
                    <CardDescription>
                      Wadi Rum has a desert climate with significant temperature variations between seasons and between
                      day and night
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Spring (March-May)</h3>
                        <ul className="space-y-1">
                          <li>• Daytime: 20-30°C (68-86°F)</li>
                          <li>• Nighttime: 10-15°C (50-59°F)</li>
                          <li>• Occasional rain showers in March</li>
                          <li>• Wildflowers may bloom after rain</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Summer (June-August)</h3>
                        <ul className="space-y-1">
                          <li>• Daytime: 30-40°C (86-104°F)</li>
                          <li>• Nighttime: 20-25°C (68-77°F)</li>
                          <li>• Very dry with intense sun</li>
                          <li>• Low humidity makes heat more bearable</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Fall (September-November)</h3>
                        <ul className="space-y-1">
                          <li>• Daytime: 20-30°C (68-86°F)</li>
                          <li>• Nighttime: 10-20°C (50-68°F)</li>
                          <li>• Gradually cooling temperatures</li>
                          <li>• Clear skies and excellent visibility</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Winter (December-February)</h3>
                        <ul className="space-y-1">
                          <li>• Daytime: 10-20°C (50-68°F)</li>
                          <li>• Nighttime: 0-5°C (32-41°F), occasionally below freezing</li>
                          <li>• Possibility of rain and rare snow</li>
                          <li>• Extra warm clothing needed for nights</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                      <h3 className="font-semibold mb-2 text-amber-800">Weather Tips</h3>
                      <ul className="space-y-1 text-amber-700">
                        <li>• Always bring sun protection regardless of season</li>
                        <li>• Pack layers for temperature changes, especially for overnight stays</li>
                        <li>• Bring a warm jacket for evenings, even in summer</li>
                        <li>• Stay hydrated - drink more water than you think you need</li>
                        <li>• Check weather forecasts before your trip</li>
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
                        Bedouin Culture & Etiquette
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        The Bedouin people are known for their hospitality and traditional way of life. When visiting:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Accept tea or coffee when offered - it's a gesture of hospitality</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Remove shoes before entering tents or sitting areas with carpets</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Ask permission before taking photos of local people</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Greet people with "As-salamu alaykum" (Peace be upon you)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Eat with your right hand if dining traditionally</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shirt className="h-5 w-5 mr-2 text-desert" />
                        Dress Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Jordan is a relatively liberal country, but respecting local customs is appreciated:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Dress modestly in public areas (shoulders and knees covered)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Lightweight, loose-fitting clothing is practical and respectful</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Women are not required to cover their hair</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>More casual attire is acceptable in tourist areas and camps</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-desert font-bold mr-2">•</span>
                          <span>Swimwear is only appropriate at private pools or beach resorts</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Language & Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">Basic Arabic Phrases</h3>
                          <ul className="space-y-1">
                            <li>• Hello: Marhaba (Mar-ha-ba)</li>
                            <li>• Thank you: Shukran (Shoo-kran)</li>
                            <li>• Yes: Na'am (Na-am)</li>
                            <li>• No: La (La)</li>
                            <li>• Please: Min fadlak (Min fad-lak)</li>
                            <li>• Excuse me: Afwan (Af-wan)</li>
                            <li>• Good: Tayeb (Tay-eb)</li>
                            <li>• Water: Ma'a (Ma-a)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Communication Tips</h3>
                          <ul className="space-y-1">
                            <li>• English is widely spoken in tourist areas</li>
                            <li>• Many Bedouin guides speak multiple languages</li>
                            <li>• Visual communication and gestures are helpful</li>
                            <li>• Learning a few Arabic phrases is appreciated</li>
                            <li>• Mobile coverage is limited in remote desert areas</li>
                            <li>• Download offline maps before your trip</li>
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
                      Health & Safety Information
                    </CardTitle>
                    <CardDescription>
                      Wadi Rum is generally safe, but the desert environment requires some precautions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Sun Protection</h3>
                        <ul className="space-y-1">
                          <li>• Use high SPF sunscreen and reapply frequently</li>
                          <li>• Wear a wide-brimmed hat and sunglasses</li>
                          <li>• Cover exposed skin during peak sun hours</li>
                          <li>• Seek shade when possible</li>
                          <li>• The desert sun is intense even on cloudy days</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Hydration</h3>
                        <ul className="space-y-1">
                          <li>• Drink at least 2-3 liters of water per day</li>
                          <li>• Bring a reusable water bottle</li>
                          <li>• Avoid excessive alcohol which causes dehydration</li>
                          <li>• Recognize signs of dehydration: headache, dizziness</li>
                          <li>• Electrolyte packets can be helpful</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Medical Considerations</h3>
                        <ul className="space-y-1">
                          <li>• Bring any personal medications you need</li>
                          <li>• Pack a basic first aid kit</li>
                          <li>• Medical facilities are limited in Wadi Rum</li>
                          <li>• Nearest hospitals are in Aqaba (60km)</li>
                          <li>• Travel insurance with evacuation coverage is recommended</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">General Safety</h3>
                        <ul className="space-y-1">
                          <li>• Always follow your guide's instructions</li>
                          <li>• Don't wander off alone in the desert</li>
                          <li>• Wear appropriate footwear for activities</li>
                          <li>• Be cautious when climbing rocks</li>
                          <li>• Flash floods can occur after rain - avoid wadis</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <h3 className="font-semibold mb-2 text-blue-800">Emergency Information</h3>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Jordan Emergency Number: 911</li>
                        <li>• Police: 191</li>
                        <li>• Ambulance: 193</li>
                        <li>• Save your guide's phone number</li>
                        <li>• Download offline maps with GPS coordinates</li>
                        <li>• Inform someone of your itinerary before remote trips</li>
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

