import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS library
import "./ShareLocationStyling.css";

function ShareLocation() {
  const [carDetails, setCarDetails] = useState("");
  const [driverDetails, setDriverDetails] = useState("");
  const [surroundings, setSurroundings] = useState("");

  const GOOGLE_MAPS_API_KEY = "AIzaSyB7T_hrPVTKwIT58qVdsPfrpXL5KcmsYhA"; // Replace with your actual Google Maps API key

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Create a static map URL with the actual API key
        const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&markers=color:red%7Clabel:L%7C${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;

        // Call function to send the email
        await sendEmail(carDetails, driverDetails, surroundings, mapUrl);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to send an email using EmailJS
  const sendEmail = async (carDetails, driverDetails, surroundings, mapUrl) => {
    try {
      await emailjs.send(
        "service_g7buz8s", // Replace with your EmailJS service ID
        "template_buy8ohc", // Replace with your EmailJS template ID
        {
          carDetails,
          driverDetails,
          surroundings,
          mapUrl,
          to_email: "keri17049@gmail.com",
        },
        "3fuWcm9HuE7RrQrgx" // Replace with your EmailJS user ID
      );
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center custom-bg vh-100">
      <div className="bg-pink p-4 rounded" style={{ width: "320px" }}>
        <Link to="/main-page" className="custom-link">
        <button>Back</button>
        </Link>
        <div className="tile-button">Location Details</div>
        <p>Please enter the relevant information</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="carDetails">
              <strong>Car Details (Number plates, car colour, etc)</strong>
            </label>
            <input
              type="text"
              id="carDetails"
              placeholder="Enter Car Details"
              className="form-control custom-input"
              value={carDetails}
              onChange={(e) => setCarDetails(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="driverDetails">
              <strong>Driver Details (Name, clothing, etc.)</strong>
            </label>
            <input
              type="text"
              id="driverDetails"
              placeholder="Enter Driver Details"
              className="form-control custom-input"
              value={driverDetails}
              onChange={(e) => setDriverDetails(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surroundings">
              <strong>
                Description of surroundings (e.g., behind the tall building)
              </strong>
            </label>
            <input
              type="text"
              id="surroundings"
              placeholder="Enter Surroundings Description"
              className="form-control custom-input"
              value={surroundings}
              onChange={(e) => setSurroundings(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="custom-button-orange w-100">
            Share Live Location
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShareLocation;
