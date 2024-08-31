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

                <section className="report-incident">
                    <h2>Report an Incident</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Describe the incident..." className="incident-description"></textarea>
                        <input type="file" className="upload-image" />
                        <button type="submit" className="submit-report">Post</button>
                    </form>
                </section>
            </main>

            <footer className="report-footer">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/reports" className="active">Reports</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </footer>
        </div>
    );
};

export default CommunityReport;
