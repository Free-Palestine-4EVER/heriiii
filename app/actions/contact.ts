"use server"

import { Resend } from "resend"

// Using the provided API key directly for immediate testing
// IMPORTANT: Move this to an environment variable as soon as possible
const resend = new Resend("re_HaRNBdbG_5NRCiWGEdjmLHDhyYxPzvofF")

export interface ContactFormData {
  name: string
  email: string
  phone: string
  nationality: string
  persons: string
  date: string
  adventures: string[]
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Format the adventures as a list
    const adventuresList = formData.adventures.length > 0 ? formData.adventures.join(", ") : "None selected"

    // Format the date
    const formattedDate = formData.date || "Not specified"

    const { data, error } = await resend.emails.send({
      from: "Wadi Rum Heritage <onboarding@resend.dev>",
      to: "mohammed.mutlak.camp@gmail.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Nationality: ${formData.nationality}
        Number of Persons: ${formData.persons}
        Date: ${formattedDate}
        Adventures: ${adventuresList}
        Message: ${formData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Nationality:</strong> ${formData.nationality}</p>
        <p><strong>Number of Persons:</strong> ${formData.persons}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Adventures:</strong> ${adventuresList}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}

