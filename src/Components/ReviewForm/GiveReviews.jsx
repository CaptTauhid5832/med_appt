import React, { useState } from 'react';
import './ReviewForm.css';
function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', review: '', rating: 0 });
  const handleButtonClick = () => setShowForm(true);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleRating = (value) => setFormData({ ...formData, rating: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setSubmittedReview(formData);
      setShowWarning(false);
      setSubmitted(true);
      setFormData({ name: '', review: '', rating: 0 });
    } else {
      setShowWarning(true);
    }
  };
  return (
    <div className="review-container">
      <p>Provide feedback for your consultation.</p>
      {!showForm ? (
        <button className="feedback-btn" onClick={handleButtonClick} disabled={submitted}>
          {submitted ? 'Feedback Submitted' : 'Click Here'}
        </button>
      ) : (
        <form className="review-form" onSubmit={handleSubmit}>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={submitted} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} disabled={submitted} />
          </div>
          <div className="rating-selector">
            <label>Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`star ${formData.rating >= star ? 'filled' : ''}`} onClick={() => !submitted && handleRating(star)}>★</span>
            ))}
          </div>
          <button type="submit" className="submit-btn" disabled={submitted}>
            {submitted ? 'Submitted' : 'Submit'}
          </button>
        </form>
      )}
      {submittedReview && (
        <div className="submitted-review">
          <h3>Your Review</h3>
          <p><strong>Name:</strong> {submittedReview.name}</p>
          <p><strong>Rating:</strong> {submittedReview.rating} / 5</p>
          <p><strong>Review:</strong> {submittedReview.review}</p>
        </div>
      )}
    </div>
  );
}
export default GiveReviews;
