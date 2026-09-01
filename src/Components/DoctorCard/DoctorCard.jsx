import React, { useState, useEffect } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    setIsBooked(existing.some((a) => a.doctorName === name));
  }, [name]);

  const handleCancelAppointment = () => {
    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    const updated = existing.filter((a) => a.doctorName !== name);
    localStorage.setItem('appointments', JSON.stringify(updated));
    setIsBooked(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
        <div>
          {isBooked ? (
            <button className="book-appointment-btn" onClick={handleCancelAppointment}>
              <div>Cancel Appointment</div>
            </button>
          ) : (
            <button className="book-appointment-btn" onClick={() => setShowForm(true)}>
              <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
          )}
        </div>
      </div>
      {showForm && (
        <AppointmentForm
          doctorName={name}
          doctorSpeciality={speciality}
          onClose={() => { setShowForm(false); setIsBooked(true); }}
        />
      )}
    </div>
  );
};
export default DoctorCard;
