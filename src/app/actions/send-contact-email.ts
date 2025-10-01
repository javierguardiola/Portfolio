"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(formData);

    const to = "javier.guardiola.barco@gmail.com";
    const { name, email, message } = validatedData;

    // TODO: Implement actual email sending logic here using a service like Resend, Nodemailer, etc.
    // For now, we'll just log it to the console.
    console.log("---- New Contact Form Submission ----");
    console.log(`Recipient: ${to}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------");

    return { success: true, message: "Correo enviado correctamente." };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return { success: false, message: "Ha ocurrido un error al procesar el formulario." };
  }
}
