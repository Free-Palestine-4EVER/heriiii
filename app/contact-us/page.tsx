import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimationWrapper from "@/components/animation-wrapper"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with our team to plan your perfect Wadi Rum adventure
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimationWrapper animation="slide-in-left">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact us</h2>
                <ContactForm />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-desert shrink-0 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">Wadi Rum Village, Jordan</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-desert shrink-0 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+962 777 424 837</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-desert shrink-0 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">info@wadirumheritage.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-desert shrink-0 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Hours</h3>
                        <p className="text-muted-foreground">Open 24/7 for inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                  <div className="space-y-4">
                    <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-black">
                      <Link
                        href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                        target="_blank"
                      >
                        WhatsApp Us
                      </Link>
                    </Button>

                    <Button asChild className="w-full bg-[#3b5998] hover:bg-[#2d4373] text-white">
                      <Link href="https://facebook.com" target="_blank">
                        <svg
                          className="mr-2 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                        </svg>{" "}
                        Facebook
                      </Link>
                    </Button>

                    <Button asChild className="w-full bg-[#E1306C] hover:bg-[#C13584] text-white">
                      <Link href="https://instagram.com" target="_blank">
                        <svg
                          className="mr-2 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>{" "}
                        Instagram
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us in Wadi Rum</h2>
              <p className="text-lg text-muted-foreground">
                Our office is located in Wadi Rum Village, the gateway to the desert
              </p>
            </div>
          </AnimationWrapper>

          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.7875175035734!2d35.41998422212143!3d29.568852462848067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150092c47664d997%3A0xf209ee0d008fac74!2zSEM5OStIVjfYjCDZgtix2YrYqSDZiNin2K_ZiiDYsdmF!5e0!3m2!1sar!2sjo!4v1743120921770!5m2!1sar!2sjo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Wadi Rum Village Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to book your unforgettable Wadi Rum experience
            </p>
            <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
              <Link
                href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                target="_blank"
              >
                WhatsApp Us Now
              </Link>
            </Button>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

