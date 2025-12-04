const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CLINIC_EMAIL,
    pass: process.env.CLINIC_EMAIL_PASS,
  },
});

module.exports = transporter;
