const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const validator = require("validator");

setGlobalOptions({maxInstances: 10});

admin.initializeApp();
const db = admin.database();

const {defineSecret} = require("firebase-functions/params");

const SENDGRID_API_KEY = defineSecret("SENDGRID_API_KEY");

/**
 * Sanitizes an email address for use as a Firebase Realtime Database key.
 * @param {string} email - The email address to sanitize.
 * @return {string} The sanitized email.
 */
function sanitizeEmail(email) {
  return email.replace(/[.@]/g, "_");
}

/**
 * Cloud Function to handle contact form submissions.
 * - Validates input (email, name, subject, message)
 * - Rate limits to 3 requests per email per day using DB
 * - Sends the form data via SendGrid email
 *
 * @function sendContactEmail
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @returns {void}
 */
exports.sendContactEmail = onRequest(
    {
      invoker: "public",
      secrets: [SENDGRID_API_KEY],
    },
    async (req, res) => {
      sgMail.setApiKey(SENDGRID_API_KEY.value());
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }

      const {name, email, phone, subject, message} = req.body;

      if (!email) return res.status(400).send({error: "Missing email"});
      if (!validator.isEmail(email)) {
        return res.status(400).send({error: "Please enter a valid email."});
      }
      if (!name) return res.status(400).send({error: "Missing name"});
      if (!subject) return res.status(400).send({error: "Missing subject"});
      if (!message) return res.status(400).send({error: "Missing message"});

      const today = new Date().toISOString().slice(0, 10);
      const emailKey = sanitizeEmail(email);
      const rateLimitRef = db.ref(`contact_limits/${emailKey}/${today}`);
      let count = 0;

      try {
        const snapshot = await rateLimitRef.once("value");
        if (snapshot.exists()) {
          count = snapshot.val().count || 0;
          if (count >= 3) {
            return res.status(429).send({error: "Submission limit reached."});
          }
        }

        const msg = {
          to: "abhinavkolli033@gmail.com",
          from: "abhinavkolli033@gmail.com",
          subject: `Contact Form: ${subject} (from ${name})`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
          html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
          replyTo: email,
        };

        await sgMail.send(msg);
        await rateLimitRef.set({count: count + 1});

        res.status(200).send({success: true});
      } catch (error) {
        logger.error("Email send error:", error);
        res.status(500).send({success: false, error: error.toString()});
      }
    },
);
