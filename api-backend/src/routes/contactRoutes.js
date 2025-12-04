const express = require("express");
const { submitPatientInquiry } = require("../controllers/contactController");

const router = express.Router();

// POST /api/patient-inquiry
router.post("/patient-inquiry", submitPatientInquiry);

module.exports = router;
