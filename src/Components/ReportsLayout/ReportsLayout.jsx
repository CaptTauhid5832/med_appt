import React from 'react';
import './ReportsLayout.css';

const sampleReports = [
  { id: 1, name: 'Blood Test Report', date: '2026-07-15', doctor: 'Dr. Sarah Chen', status: 'Completed' },
  { id: 2, name: 'X-Ray Report', date: '2026-08-02', doctor: 'Dr. Marcus Alan', status: 'Completed' },
  { id: 3, name: 'General Checkup', date: '2026-08-20', doctor: 'Dr. Sarah Chen', status: 'Pending' },
];

const ReportsLayout = () => {
  return (
    <div className="reports-container">
      <h2>Your Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleReports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>{report.doctor}</td>
              <td>{report.status}</td>
              <td>
                
                  href="/patient_report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-action-link"
                >
                  View
                </a>
                {' | '}
                
                  href="/patient_report.pdf"
                  download="patient_report.pdf"
                  className="report-action-link"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
