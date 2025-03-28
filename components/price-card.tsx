import { Check } from "lucide-react"
import Link from "next/link"

interface PriceCardProps {
  title: string
  price: string
  duration: string
  features: string[]
  buttonText?: string
  buttonLink?: string
}

export default function PriceCard({
  title,
  price,
  duration,
  features,
  buttonText = "Book Jeep Tour",
  buttonLink = "/contact-us",
}: PriceCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="p-6 text-center bg-[#FF8A00] text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 text-base">
          {price} | {duration}
        </div>
      </div>

      <div className="p-6 bg-white">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-[#FF8A00] shrink-0 mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href={buttonLink}
            className="block w-full text-center py-3 px-4 bg-[#FF8A00] text-white font-medium rounded-md hover:bg-[#E67E00] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}

