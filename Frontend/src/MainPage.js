import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainPage.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import emailjs from "emailjs-com";

function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search has been performed
  const [message, setMessage] = useState(""); // For showing panic mode message

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = async (e) => {
    e.preventDefault();

    setSearchPerformed(false);

    if (!searchTerm.trim()) return;

    try {
      const reportsRef = collection(db, "reports");
      const q = query(reportsRef, where("incidentLocation", "==", searchTerm));
      const querySnapshot = await getDocs(q);

      const foundReports = [];
      querySnapshot.forEach((doc) => {
        foundReports.push(doc.data());
      });

      setSearchResults(foundReports);
      setSearchPerformed(true);
    } catch (error) {
      console.error("Error searching reports: ", error);
    }
  };

  // Function to handle Panic Mode button click
  const handlePanicMode = async () => {
    const currentLocation = "216 14th Ave MTN HQ, Roodeport";
    const alertMessage = `This is an emergency alert from ${currentLocation}. Please take necessary actions. Koketso is in need of help, her safety has been compromised`;

    try {
      const querySnapshot = await getDocs(collection(db, "emergency-contacts"));
      const contactsList = querySnapshot.docs.map((doc) => doc.data().email);

      if (contactsList.length === 0) {
        alert("No contacts found to send alerts to.");
        return;
      }

      for (const email of contactsList) {
        const templateParams = {
          to_email: email,
          message: alertMessage
        };

        console.log("Sending email to:", email);

        const response = await emailjs.send(
          "service_hkjtwgk",
          "template_d3ejlm5",
          templateParams,
          "bwhEUCHf8cDZPH-VU"
        );

        console.log("Email sent successfully:", response);
      }

      // Display browser alert popup
      window.alert(`Alerts sent to: ${contactsList.join(", ")}`);
    } catch (error) {
      console.error("Error sending alerts:", error);
      window.alert(`Failed to send alerts. Location: ${currentLocation}`);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="greeting">
          <h1>Hello, Girl Pal!</h1>
          <Link to="/main-page/profile">
            <i className="fa-regular fa-user"></i>
          </Link>
        </div>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>216 14th Ave MTN HQ, Roodeport</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
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
          <Link to="/main-page/share-location">
            <button className="main-button share-ride">Share Ride</button>
          </Link>
        </div>

        {searchPerformed && searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results:</h3>
            <ul>
              {searchResults.map((report, index) => (
                <li key={index}>
                  <p>
                    <strong>Name:</strong> {report.userName}
                  </p>
                  <p>
                    <strong>Location:</strong> {report.incidentLocation}
                  </p>
                  <p>
                    <strong>Description:</strong> {report.incidentDescription}
                  </p>
                  {report.fileUrl && (
                    <p>
                      <strong>Media:</strong>{" "}
                      <a
                        href={report.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View File
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display a message if no results are found */}
        {searchPerformed && searchResults.length === 0 && (
          <div className="no-results">
            <h3>No search results found for "{searchTerm}"</h3>
          </div>
        )}

        {/* Display panic mode message if present */}
        {message && (
          <div className="panic-message">
            <p>{message}</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <Link to="/main-page/support">
          <button className="footer-button home">
            <i className="fa-regular fa-handshake"></i>
          </button>
        </Link>
        <Link to="/main-page/contacts">
          <button className="footer-button call">
            <i className="fa-solid fa-phone"></i>
          </button>
        </Link>
        <Link to="/main-page/settings">
          <button className="footer-button settings">
            <i className="fa-solid fa-gear"></i>
          </button>
        </Link>
        <Link to="/main-page/FAQ">
          <button className="footer-button profile">
            <i className="fa-regular fa-circle-question"></i>
          </button>
        </Link>

          <button className="footer-button Panic-Button"
          onClick={handlePanicMode} // Call handlePanicMode on click
          >
            
            <i className="fa-solid fa-triangle-exclamation"></i>
          </button>
    
      </footer>
    </div>
  );
}

export default MainPage;
