const contactRoutes = require("./routes/contactRoutes.js");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = 5000;

dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
