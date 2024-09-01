// functions/index.js
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure the email transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider, e.g., 'yahoo', 'hotmail', etc.
  auth: {
    user: functions.config().smtp.email, // Your email address
    pass: functions.config().smtp.password // Your email password or app-specific password
  }
});

// Function to send emergency alert emails
exports.sendAlertEmails = functions.https.onRequest(async (req, res) => {
  const contacts = req.body.contacts; // Assuming contacts is an array of email addresses

  // Set up email data
  const mailOptions = {
    from: functions.config().smtp.email,
    to: contacts.join(", "), // Join multiple email addresses with a comma
    subject: "Emergency Alert",
    text: "This is an emergency alert! Please take immediate action."
  };

  try {
    // Send email using the configured transporter
    await transporter.sendMail(mailOptions);
    res.status(200).send("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).send("Failed to send emails.");
  }
});
