# StayHealthy — Medical Appointment Booking System

StayHealthy is a full-stack web application that lets patients find doctors by specialty, book appointments (including instant consultations), leave reviews, and manage their profile. Doctors and patients can register and log in securely, and the app is optimized for search engines (SEO) and deployed as a containerized service on IBM Cloud Code Engine.

## Features

- Browse doctors by name, specialty, experience, and ratings
- Book a standard appointment (Name, Phone, Date, Time) or an Instant Consultation (Name, Phone)
- Secure user registration and login with JWT-based authentication
- Editable user profile with session-based auth
- Leave and view doctor reviews with a star rating system
- Application-wide notifications
- Responsive, SEO-optimized landing page

## Tech Stack

- **Frontend:** React (Vite), React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT, bcrypt
- **Deployment:** Docker, IBM Cloud Container Registry, IBM Cloud Code Engine

## Project Structure
med_appt/
├── index.html # Vite entry point (SEO meta tags here)
├── src/ # React frontend source
│ ├── Login/
│ ├── Sign_Up/
│ ├── Navbar/
│ └── Components/ # DoctorCard, AppointmentForm, ProfileCard, ReviewForm, etc.
├── server/ # Node/Express backend API
│ ├── index.js # Server entry point
│ ├── db.js # MongoDB connection
│ ├── models/
│ └── routes/
├── Dockerfile
└── vite.config.js


## Setup Instructions

### Prerequisites
- Node.js (v18+) and npm
- A MongoDB connection string (local MongoDB or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/CaptTauhid5832/med_appt.git
cd med_appt
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd server
npm install
```

### 4. Configure the database
Add your MongoDB connection string to `server/db.js` (or a `.env` file if configured).

### 5. Start the backend server
```bash
npm start
```
The API server starts on the configured port (default in this project: 8181) and exposes endpoints such as `/api/auth/register` and `/api/auth/login`.

### 6. Start the frontend (development mode)
From the project root:
```bash
npm run dev
```

### 7. Build for production
```bash
npm run build
```
This creates an optimized production build and moves it into `server/build`.

## Deployment

The app is containerized with the included `Dockerfile` and deployed to IBM Cloud Code Engine:

```bash
docker build -t us.icr.io/<your-namespace>/medical_app .
docker push us.icr.io/<your-namespace>/medical_app
ibmcloud ce application create --name medicalapp --image us.icr.io/<your-namespace>/medical_app --registry-secret icr-secret --port 4173
```

## License

This project was built as part of a capstone course project.




