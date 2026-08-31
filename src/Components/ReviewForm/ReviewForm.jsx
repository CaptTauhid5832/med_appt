import React from 'react';
import GiveReviews from './GiveReviews';
import './ReviewForm.css';
const doctors = [
  { name: 'Dr. Sarah Chen', speciality: 'Cardiologist' },
  { name: 'Dr. Marcus Alan', speciality: 'Pediatrician' },
];
const ReviewForm = () => (
  <div className="review-container">
    <h2>Reviews</h2>
    <table className="reviews-table">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Doctor Name</th>
          <th>Doctor Speciality</th>
          <th>Provide feedback</th>
          <th>Review Given</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doc, index) => (
          <GiveReviews key={doc.name} serial={index + 1} doctorName={doc.name} doctorSpeciality={doc.speciality} />
        ))}
      </tbody>
    </table>
  </div>
);
export default ReviewForm;
