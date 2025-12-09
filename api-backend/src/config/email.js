const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.CLINIC_EMAIL,
    pass: process.env.CLINIC_EMAIL_PASS,
  },
});

module.exports = transporter;
