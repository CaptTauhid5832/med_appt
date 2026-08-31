import React, { useState } from 'react';
import './ReviewForm.css';
function GiveReviews({ serial, doctorName, doctorSpeciality }) {
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
      setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <>
      <tr>
        <td>{serial}</td>
        <td>{doctorName}</td>
        <td>{doctorSpeciality}</td>
        <td>
          <button className="feedback-btn" onClick={handleButtonClick} disabled={submitted}>
            {submitted ? 'Submitted' : 'Click Here'}
          </button>
        </td>
        <td>{submittedReview ? `${submittedReview.rating}/5 - ${submittedReview.review}` : ''}</td>
      </tr>
      {showForm && (
        <tr>
          <td colSpan="5">
            <form className="review-form" onSubmit={handleSubmit}>
              {showWarning && <p className="warning">Please fill out all fields.</p>}
              <div>
                <label htmlFor={`name-${serial}`}>Name:</label>
                <input type="text" id={`name-${serial}`} name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor={`review-${serial}`}>Review:</label>
                <textarea id={`review-${serial}`} name="review" value={formData.review} onChange={handleChange} />
              </div>
              <div className="rating-selector">
                <label>Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`star ${formData.rating >= star ? 'filled' : ''}`} onClick={() => handleRating(star)}>★</span>
                ))}
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </td>
        </tr>
      )}
    </>
  );
}
export default GiveReviews;
