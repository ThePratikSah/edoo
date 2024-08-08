import { Resend } from "resend";
import WelcomeEmail from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail() {
  'use server';
  const { data, error } = await resend.emails.send({
    from: "Pratik <hi@pratik.dev>",
    to: ["shivam3448@gmail.com"],
    subject: "Hello world",
    react: WelcomeEmail({ userFirstname: "Pratik" }),
  });

  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
}
