const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });

sgMail.setApiKey(functions.config().sendgrid.key); // Ensure your SendGrid API key is set

exports.sendAlertEmails = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Check if the request method is POST
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const { contacts } = req.body;

    if (!contacts || contacts.length === 0) {
      return res.status(400).send('No contacts provided');
    }

    const msg = {
      to: contacts,
      from: 'christinahkmothapo@gmail.com',
      subject: 'Emergency Alert',
      text: 'This is an emergency alert. Please take necessary actions.',
    };

    try {
      await sgMail.sendMultiple(msg);
      res.status(200).send('Alerts sent');
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).send('Error sending alerts');
    }
  });
});
