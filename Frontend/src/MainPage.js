import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assuming you have a CSS file for styling

function MainPage() {
  return (
    <div className="app">
      <header className="header">
        <div className="greeting">
          <h1>Hello, Tracy!</h1>
          <Link to="/main-page/profile">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-pic"
          />
          </Link>
        </div>
        <div className="location">
          <img
            src="https://via.placeholder.com/20"
            alt="Location Icon"
            className="location-icon"
          />
          <p>Johannesburg, Sandton</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img
              src="https://via.placeholder.com/20"
              alt="Search"
              className="search-icon"
            />
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="button-grid">
          <Link to="/main-page/DangerAlerts">
          <button className="main-button danger-alert">Danger Alert</button>
          </Link>
          <Link to="/main-page/CommunityReporting">
          <button className="main-button community-alerts">
            Community Alerts
          </button>
          </Link>

          <Link to="/main-page/report-incident">
            <button className="main-button report-incident">
              Report Incident
            </button>
          </Link>

          <Link to="/main-page/share-ride">
            <button className="main-button share-ride">Share Ride</button>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <Link to="/main-page/support">
          <button className="footer-button home">
            <img src="https://via.placeholder.com/30" alt="Support" />
          </button>
        </Link>

      <Link to="/main-page/contacts">
        <button className="footer-button call">
          <img src="https://via.placeholder.com/30" alt="Call" />
        </button>
        </Link>

        <Link to="/main-page/FAQ">
        <button className="footer-button settings">
          <i className="fa-solid fa-gear" ></i>
        </button>
        </Link>

        <Link to="/main-page/contacts">
          <button className="footer-button profile">
            <img src="https://via.placeholder.com/30" alt="Profile" />
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default MainPage;
