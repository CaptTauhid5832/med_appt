import React, { useState, useEffect } from 'react';
import './ProfileCard.css';
import { API_URL } from '../../config';
const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const token = sessionStorage.getItem('auth-token');
    if (!token) {
      setError('Please log in to view your profile.');
      return;
    }
    fetch(`${API_URL}/api/auth/user`, {
      method: 'GET',
      headers: { 'auth-token': token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(typeof data.error === 'string' ? data.error : 'Unable to load profile.');
        } else {
          setProfile(data);
        }
      })
      .catch(() => setError('Unable to load profile.'));
  }, []);
  if (error) {
    return <div className="profile-card"><p>{error}</p></div>;
  }
  if (!profile) {
    return <div className="profile-card"><p>Loading profile...</p></div>;
  }
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="48" height="48" fill="#3685fb">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
      </div>
      <h3>{profile.name}</h3>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      {profile.role && <p><strong>Role:</strong> {profile.role}</p>}
    </div>
  );
};
export default ProfileCard;
