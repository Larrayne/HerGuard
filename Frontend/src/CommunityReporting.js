import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './CommunityReporting.css'; 
import { db } from './firebase.js'; 
import { collection, getDocs } from "firebase/firestore";

const CommunityReport = () => {
    const [reports, setReports] = useState([]);  

    useEffect(() => {
        const loadReports = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "reports"));
                const reportsList = querySnapshot.docs.map(doc => doc.data());
                setReports(reportsList);  
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        loadReports();
    }, []);  

    return (
        <div className="community-report">
            <Link to="/main-page" className='custom-link'>Back</Link>
            <header className="report-header">
                <h1>Community Reporting</h1>
            </header>

            <main className="report-content">
                <section className="incident-reports">
                    <h2>Recent Reports</h2>
                    {reports.length > 0 ? (
                        reports.map((report, index) => (
                            <div className="report" key={index}>
                                <div className="user-info">
                                    <span className="user-name">{report.userName}</span>
                                </div>
                                <div className="user-location">
                                    <span className="location">{"Location: " + report.incidentLocation}</span>
                                </div>
                                <p className="report-description">{"Description: " + report.incidentDescription}</p>
                                {"Supporting Evidence: " + report.fileUrl && (
                                    <img src={report.fileUrl} alt="Media Evidence" style={{ width: '100%', height: 'auto' }} />
                                )}
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No reports found.</p>
                    )}
                </section>
            </main>

            <footer className="report-footer">
                <nav>
                    <Link to="/main-page">Home</Link>
                    <Link to="/main-page/support">Support</Link>
                    <Link to="/main-page/FAQ">FAQ</Link>
                    <Link to="/main-page/profile">Profile</Link>
                </nav>
            </footer>
        </div>
    );
};

export default CommunityReport;
