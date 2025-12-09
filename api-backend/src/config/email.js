// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.CLINIC_EMAIL,
//     pass: process.env.CLINIC_EMAIL_PASS,
//   },
// });

// module.exports = transporter;


// config/email.js
const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = resend;
