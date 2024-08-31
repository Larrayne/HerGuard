import React from 'react';
import { Link } from 'react-router-dom'; 
import './CommunityReporting.css'; 

const CommunityReport = () => {
    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to a backend API
        console.log('Form submitted');
    };

    return (
        <div className="community-report">
        <Link to="/main-page" className='custom-link'>Back</Link>
            <header className="report-header">
                <h1>Community Reporting</h1>
            </header>

            <main className="report-content">
                <section className="incident-reports">
                    <h2>Recent Reports</h2>
                    <div className="report">
                        {/* Add user icon if needed and path is correct */}
                        {/* <div className="user-info">
                            <img src={userIcon} alt="User" className="user-icon" />
                            <span className="user-name">Anonymous User</span>
                        </div> */}
                        <p className="report-description">Attempted hijacking at Eastgate Mall in the ground floor parking.</p>
                    </div>
                    <div className="report">
                        <div className="user-info">
                            {/* <img src={userIcon} alt="User" className="user-icon" /> */}
                            <span className="user-name">Siphokazi</span>
                        </div>
                        <p className="report-description">Be on the lookout when driving on Main Street, there has been an increase in carjackings.</p>
                    </div>
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
