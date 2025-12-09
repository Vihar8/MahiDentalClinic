const contactRoutes = require("./routes/contactRoutes.js");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = 5000;

dotenv.config();
const app = express();
// app.use(cors({
//   origin: ["http://localhost:5173",
//   "https://mahidentalclinic.vercel.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://mahidentalclinic.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Not Allowed!"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());

app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
