import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import cors from "cors";

const corsHandler = cors({ origin: true });

export const sendEmail = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      return response.status(405).send("Method Not Allowed");
    }

    try {
      const { name, email, subject, message } = request.body;

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: functions.config().email.host,
        port: parseInt(functions.config().email.port),
        secure: functions.config().email.port === "465",
        auth: {
          user: functions.config().email.host_user,
          pass: functions.config().email.host_password,
        },
      });

      // Email content
      const mailOptions = {
        from: functions.config().email.default_from_email,
        to: functions.config().email.default_from_email,
        subject: `New message from ${name}: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return response.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return response.status(500).json({ message: "Failed to send email." });
    }
  });
});