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
          <i className="fa-regular fa-user" ></i>
          </Link>
        </div>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Johannesburg, Sandton</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
           <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="button-grid">
          <button className="main-button danger-alert">Danger Alert</button>
          <button className="main-button community-alerts">
            Community Alerts
          </button>
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
            <i className="fa-regular fa-handshake"></i>
          </button>
        </Link>

      <Link to="/main-page/contacts">
        <button className="footer-button call">
        <i className="fa-solid fa-phone" ></i>
        </button>
        </Link>

        <Link to="/main-page/settings">
        <button className="footer-button settings">
          <i className="fa-solid fa-gear" ></i>
        </button>
        </Link>

        <Link to="/main-page/FAQ">
          <button className="footer-button profile">
          <i className="fa-regular fa-circle-question" ></i>
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default MainPage;
