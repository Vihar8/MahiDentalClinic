const transporter = require("../config/email.js");

const submitPatientInquiry = async (req, res) => {
  try {
    const { name, phone, email, treatment, city, zip } = req.body;

    // Basic backend safety (even if you validate in frontend with Yup)
    if (!name || !phone || !email || !treatment || !city || !zip) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 1️⃣ Email TO CLINIC (you)
    const clinicMailOptions = {
      from: `"${process.env.CLINIC_NAME || "Clinic Website"}" <${process.env.CLINIC_EMAIL}>`,
      to: process.env.CLINIC_EMAIL,
      subject: `New Patient Inquiry – ${name}`,
      html: `
        <h2>New Patient Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <hr />
        <p>This inquiry came from your website form.</p>
      `,
    };

    // 2️⃣ Email TO PATIENT (dynamic email)
    const patientMailOptions = {
      from: `"${process.env.CLINIC_NAME || "Dental Clinic"}" <${process.env.CLINIC_EMAIL}>`,
      to: email, // <-- dynamic patient email
      subject: "Thank you for contacting us",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out regarding <strong>${treatment}</strong>.</p>
        <p>We have received your inquiry and our team will contact you soon on:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p>Regards,<br>${process.env.CLINIC_NAME || "Our Dental Team"}</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(clinicMailOptions);
    await transporter.sendMail(patientMailOptions);

    return res.status(200).json({ message: "Inquiry submitted successfully.", statusCode: "200" });
  } catch (error) {
    console.error("Error sending inquiry email:", error);
    return res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};

module.exports = { submitPatientInquiry };
