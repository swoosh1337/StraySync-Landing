"use server"

import nodemailer from "nodemailer"

let transporter: nodemailer.Transporter

// Always use Gmail SMTP for simplicity
transporter = nodemailer.createTransport({
  service: 'gmail',  // Using 'gmail' service preset instead of manual host/port
  auth: {
    user: process.env.EMAIL_USER || 'tazigrigolia@gmail.com',
    pass: process.env.EMAIL_PASS, // This should be an app password
  },
})

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    // Always send the email (both in development and production)
    const result = await transporter.sendMail({
      from: `"StraySync Contact" <${process.env.EMAIL_USER || 'tazigrigolia@gmail.com'}>`,
      to: "tazigrigolia@gmail.com",
      subject: "New message from StraySync contact form",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    console.log("Message sent successfully:", result)
    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

