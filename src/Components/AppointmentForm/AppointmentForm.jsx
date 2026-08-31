import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctorName, doctorSpeciality, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date && formData.time) {
      localStorage.setItem('doctorData', JSON.stringify({ name: doctorName, speciality: doctorSpeciality }));
      localStorage.setItem(doctorName, JSON.stringify(formData));
      setSubmitted(true);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  if (submitted) {
    return (
      <div className="appointment-form-overlay">
        <div className="appointment-form-modal">
          <h2>Appointment Booked!</h2>
          <p>Your appointment with <b>{doctorName}</b> is confirmed for {formData.date} at {formData.time}.</p>
          <button className="appointment-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-form-overlay">
      <div className="appointment-form-modal">
        <h2>Book Appointment with {doctorName}</h2>
        {showWarning && <p className="appointment-warning">Please fill out all fields.</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Date
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <label>
            Time
            <input type="time" name="time" value={formData.time} onChange={handleChange} />
          </label>
          <div className="appointment-form-buttons">
            <button type="submit" className="appointment-submit-btn">Confirm Booking</button>
            <button type="button" className="appointment-cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
