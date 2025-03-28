import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Using the provided API key directly for immediate testing
// IMPORTANT: Move this to an environment variable as soon as possible
const resend = new Resend("re_HaRNBdbG_5NRCiWGEdjmLHDhyYxPzvofF")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, nationality, persons, date, adventures, message } = body

    // Format the adventures as a list
    const adventuresList = adventures && adventures.length > 0 ? adventures.join(", ") : "None selected"

    const { data, error } = await resend.emails.send({
      from: "Wadi Rum Heritage <onboarding@resend.dev>",
      to: "mohammed.mutlak.camp@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Nationality: ${nationality}
        Number of Persons: ${persons}
        Date: ${date || "Not specified"}
        Adventures: ${adventuresList}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Number of Persons:</strong> ${persons}</p>
        <p><strong>Date:</strong> ${date || "Not specified"}</p>
        <p><strong>Adventures:</strong> ${adventuresList}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

