import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
  imageSrc?: string
}

export default function TestimonialCard({ quote, author, location, rating, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>

        <blockquote className="text-lg mb-6 italic">"{quote}"</blockquote>

        <div className="flex items-center">
          {imageSrc ? (
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image src={imageSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-full bg-desert/20 text-desert flex items-center justify-center mr-4">
              {author.charAt(0)}
            </div>
          )}

          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

