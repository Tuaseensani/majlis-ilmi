"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: FormData | { name: string; email: string; subject: string; message: string }) {
  let name, email, subject, message;

  // Check if the data is coming from the Contact Form (FormData)
  if (data instanceof FormData) {
    name = data.get("name") as string;
    email = data.get("email") as string;
    subject = data.get("subject") as string;
    message = data.get("message") as string;
  } else {
    // Data is coming from the Library Page (Plain Object)
    name = data.name;
    email = data.email;
    subject = data.subject;
    message = data.message;
  }

  try {
    await resend.emails.send({
      from: "Majlis Website <onboarding@resend.dev>", // Change this once your domain is verified
      to: "tuaseensaani1@gmail.com", 
      replyTo: email, 
      subject: subject,
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "Failed to send message." };
  }
}