🦷 Mahi Dental Clinic - MERN Stack Project

A full-stack web application for Mahi Dental Clinic, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project helps manage appointments, patient records, treatments, and provides information about dental services.

🚀 Features
🖥️ Frontend (React.js)

Responsive design for patients and admin

Service listings (Braces, Implants, Whitening, etc.)

Online appointment booking form

Patient dashboard

Contact & clinic details

⚙️ Backend (Node.js + Express.js)

RESTful APIs for appointments, users, services

Secure authentication & authorization (JWT)

Input validation using Joi / middleware

Error handling

🗄️ Database (MongoDB + Mongoose)

Patient records

Appointment scheduling

Treatments & services

Admin user management

📂 Project Structure
MahiDentalClinic/
│── backend/           # Node.js + Express server
│   ├── controllers/   # Route handlers
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── config/        # DB & environment setup
│   └── server.js      # Entry point
│
│── frontend/          # React.js client
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Screens (Home, Services, Booking)
│   │   ├── context/     # Global state
│   │   └── App.js
│   └── public/
│
│── README.md
│── package.json
│── .env

🔧 Installation & Setup
1️⃣ Clone the Repository
git clone 
cd mahi-dental-clinic

2️⃣ Backend Setup
cd backend
npm install
npm run dev


👉 Runs server on http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start


👉 Runs client on http://localhost:3000

🔑 Environment Variables

Create a .env file inside backend/ and add:

PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

📸 Screenshots (Optional)

Add homepage, booking form, and admin dashboard screenshots here.

🧑‍⚕️ Services Offered

Braces & Aligners

Dental Implants

Painless Root Canal

Teeth Whitening

Crowns & Bridges

Gum Disease Treatment

Children Dentistry

Preventive Sealants
and many more…

👨‍💻 Tech Stack

Frontend: React.js, Context API / Redux, Axios, Bootstrap/Tailwind

Backend: Node.js, Express.js, JWT, Joi

Database: MongoDB, Mongoose

Other Tools: Git, Postman, VS Code

📞 Contact

Mahi Dental Clinic
Sector 7, Gandhinagar, Gujarat
📧 info@mahidental.in

📞 +91-9978914926"# MahiDentalClinic" 
