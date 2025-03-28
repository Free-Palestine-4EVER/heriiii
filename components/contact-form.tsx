"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact"
import type { Locale } from "@/types"

interface ContactFormProps {
  lang?: Locale
  dictionary?: any
}

export default function ContactForm({ lang = "en", dictionary }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    persons: "",
    date: undefined as Date | undefined,
    adventures: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Use dictionary if provided, otherwise default to English
  const t = dictionary?.contactUs?.form || {
    title: "Contact us",
    firstName: "First & Last name",
    email: "Email",
    phone: "Phone",
    nationality: "Nationality",
    persons: "How many persons",
    date: "Date picker",
    pickDate: "Pick a date",
    adventures: "Choose your adventure",
    message: "Special request or message to the host",
    submit: "Submit",
    submitting: "Submitting...",
    success: "Thank you for your message! We'll get back to you soon.",
    error: "There was an error sending your message. Please try again.",
  }

  const adventures = dictionary?.common?.adventures || [
    { id: "jeep-tour", label: "Jeep tour" },
    { id: "camping", label: "Camping" },
    { id: "scrambling", label: "Scrambling" },
    { id: "hiking", label: "Hiking" },
    { id: "climbing", label: "Climbing" },
    { id: "camel-ride", label: "Camel ride" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (adventureId: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        return { ...prev, adventures: [...prev.adventures, adventureId] }
      } else {
        return { ...prev, adventures: prev.adventures.filter((id) => id !== adventureId) }
      }
    })
  }

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Prepare the data for submission
      const submissionData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        persons: formData.persons,
        date: formData.date ? format(formData.date, "PPP") : "",
        adventures: formData.adventures,
        message: formData.message,
      }

      // Submit the form using the server action
      const result = await submitContactForm(submissionData)

      if (result.success) {
        setSubmitSuccess(true)
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          nationality: "",
          persons: "",
          date: undefined,
          adventures: [],
          message: "",
        })
      } else {
        setSubmitError(result.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError(t.error || "There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">{t.success}</div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{submitError}</div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-desert font-medium">
          {t.firstName}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder=""
          value={formData.name}
          onChange={handleChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-desert font-medium">
          {t.email}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-desert font-medium">
          {t.phone}
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder=""
          value={formData.phone}
          onChange={handleChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nationality" className="text-desert font-medium">
          {t.nationality}
        </Label>
        <Input
          id="nationality"
          name="nationality"
          placeholder=""
          value={formData.nationality}
          onChange={handleChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="persons" className="text-desert font-medium">
          {t.persons}
        </Label>
        <Input
          id="persons"
          name="persons"
          type="number"
          min="1"
          placeholder=""
          value={formData.persons}
          onChange={handleChange}
          required
          className="border-gray-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date" className="text-desert font-medium">
          {t.date}
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300",
                !formData.date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.date ? format(formData.date, "PPP") : <span>{t.pickDate}</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={formData.date} onSelect={handleDateChange} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label className="text-desert font-medium">
          {t.adventures} <span className="text-red-500">*</span>
        </Label>
        <div className="grid grid-cols-2 gap-2">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="flex items-center space-x-2">
              <Checkbox
                id={adventure.id}
                checked={formData.adventures.includes(adventure.id)}
                onCheckedChange={(checked) => handleCheckboxChange(adventure.id, checked as boolean)}
              />
              <label
                htmlFor={adventure.id}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {adventure.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-desert font-medium">
          {t.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder=""
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="border-gray-300"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? t.submitting : t.submit}
      </Button>
    </form>
  )
}

