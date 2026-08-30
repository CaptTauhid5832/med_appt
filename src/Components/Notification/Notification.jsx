import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import './Notification.css';
const Notification = ({ children }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(null);
  const check = () => {
    const email = sessionStorage.getItem('email');
    const doc = JSON.parse(localStorage.getItem('doctorData'));
    const appt = doc?.name ? JSON.parse(localStorage.getItem(doc.name)) : null;
    if (email && doc?.name && appt) {
      setInfo({ doctorName: doc.name, userName: appt.userName || appt.patientName || email, date: appt.date, time: appt.time });
      setShow(true);
    } else {
      setInfo(null);
      setShow(false);
    }
  };
  useEffect(() => {
    check();
    window.addEventListener('storage', check);
    return () => window.removeEventListener('storage', check);
  }, []);
  const cancel = () => {
    const doc = JSON.parse(localStorage.getItem('doctorData'));
    if (doc?.name) localStorage.removeItem(doc.name);
    setShow(false);
    setInfo(null);
  };
  return (
    <>
      <Navbar />
      {show && info && (
        <div className="appointment-card">
          <p>Appointment booked with <strong>{info.doctorName}</strong></p>
          {info.userName && <p>Booked by: {info.userName}</p>}
          {info.date && <p>Date: {info.date}</p>}
          {info.time && <p>Time: {info.time}</p>}
          <button className="cancel-btn" onClick={cancel}>Cancel Appointment</button>
        </div>
      )}
      {children}
    </>
  );
};
export default Notification;
