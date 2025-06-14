// lib/mailer.ts
// import nodemailer from "nodemailer";

// export async function sendMail(name: string, email: string, message: string) {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.MAIL_USER,
//       to: process.env.MAIL_TO,
//       subject: `New Message from ${name}`,
//       html: `
//         <h3>Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully:", info.response);
//   } catch (error) {
//     console.error("❌ Failed to send email:", error);
//     throw error; // propagate to API to show 500
//   }
// }

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendMail(name: string, email: string, message: string) {
  // Send mail to you
  await transporter.sendMail({
    from: `"Contact-Us" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: "New Contact Message",
    html: `
      <h3>You have a new message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  // Send thank-you email to the user
  await transporter.sendMail({
    from: `"Vently" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Thank You for Reaching Out!",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for contacting us! We’ve received your message and will get back to you soon.</p>
      <p>Best regards,<br/>Vently</p>
    `,
  });
}
