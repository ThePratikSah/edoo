import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail() {
  'use server';
  const { data, error } = await resend.emails.send({
    from: "Pratik <hi@pratik.dev>",
    to: ["shivam3448@gmail.com"],
    subject: "Hello world",
    html: '<Html><Text>Some title</Text><Hr /><Button href="https://example.com">Click me</Button></Html>',
  });

  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
}
