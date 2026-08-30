import React, { useState } from 'react';
import './FindDoctorSearch.css';

const specialities = [
    'Dentist',
    'Gynecologist/Obstetrician',
    'General Physician',
    'Dermatologist',
    'Ear-Nose-Throat (ENT) Specialist',
    'Homeopath',
    'Ayurveda'
];

const FindDoctorSearch = ({ onSearch }) => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        if (onSearch) {
            onSearch(speciality);
        }
    };

    const handleInputChange = (e) => {
        setSearchDoctor(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <div className="finddoctor">
            <center>
                <h1>Find a Doctor and Book an Appointment</h1>
                <div className="home-search-container">
                    <div className="doctor-search-box">
                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors by specialty..."
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                            value={searchDoctor}
                            onChange={handleInputChange}
                        />
                        <i className="fa fa-search" style={{ marginLeft: '10px' }}></i>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {specialities.map((speciality) => (
                                <div
                                    className="search-doctor-result-item"
                                    key={speciality}
                                    onMouseDown={() => handleDoctorSelect(speciality)}
                                >
                                    <span><i className="fa fa-search" style={{ fontSize: '10px' }}></i></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;
