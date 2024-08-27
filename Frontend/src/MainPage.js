import React from "react";
import "./App.css"; // Assuming you have a CSS file for styling

function mainPage() {
  return (
    <div className="app">
      <header className="header">
        <div className="greeting">
          <h1>Hello, Tracy!</h1>
          <img
            src="https://via.placeholder.com/40" // Placeholder image for profile, replace with the actual image URL
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="location">
          <img
            src="https://via.placeholder.com/20" // Placeholder image for Google Maps icon, replace with actual icon
            alt="Location Icon"
            className="location-icon"
          />
          <p>Johannesburg, Sandton</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img
              src="https://via.placeholder.com/20" // Placeholder image for search icon, replace with actual icon
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="button-grid">
          <button className="main-button danger-alert">Danger Alert</button>
          <button className="main-button community-alerts">
            Community Alerts
          </button>
          <button className="main-button report-incident">
            Report Incident
          </button>
          <button className="main-button share-ride">Share Ride</button>
        </div>
      </main>

      <footer className="footer">
        <button className="footer-button home">
          <img
            src="https://via.placeholder.com/30" // Placeholder for home icon
            alt="Home"
          />
        </button>
        <button className="footer-button call">
          <img
            src="https://via.placeholder.com/30" // Placeholder for call icon
            alt="Call"
          />
        </button>
        <button className="footer-button settings">
          <img
            src="https://via.placeholder.com/30" // Placeholder for settings icon
            alt="Settings"
          />
        </button>
        <button className="footer-button profile">
          <img
            src="https://via.placeholder.com/30" // Placeholder for profile icon
            alt="Profile"
          />
        </button>
      </footer>
    </div>
  );
}

export default mainPage;
