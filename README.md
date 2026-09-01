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
