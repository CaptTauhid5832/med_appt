import React, { useState } from 'react';
import './ReviewForm.css';
const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
  const doctorName = storedDoctorData?.name || 'your doctor';
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="review-container">
      <p>How was your consultation with <strong>{doctorName}</strong>?</p>
      <button className="feedback-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Feedback Form' : 'Give Feedback'}
      </button>
      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <label htmlFor="rating">Rating</label>
          <select id="rating" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={0}>Select a rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Share your experience..." />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};
export default ReviewForm;
