import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './Components/Notification/Notification';
import Login from './Login/Login';
import SignUp from './Sign_Up/SignUp';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import './App.css';
const Home = () => (
  <div>
    <FindDoctorSearch />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <DoctorCard name="Dr. Sarah Chen" speciality="Cardiologist" experience={12} ratings={4.8} />
      <DoctorCard name="Dr. Marcus Alan" speciality="Pediatrician" experience={8} ratings={4.6} />
    </div>
      <ReviewForm />
  </div>
);
function App() {
  return (
    <BrowserRouter>
      <Notification>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </Notification>
    </BrowserRouter>
  );
}
export default App;
