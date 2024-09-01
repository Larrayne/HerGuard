import React, { useEffect, useState } from "react";
import "./DangerAlerts.css";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebase.js"; // Import your Firebase config

const DangerAlerts = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const reportsRef = collection(db, "reports");
        const querySnapshot = await getDocs(reportsRef);
        const locationsData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const { lat, lng } = data.incidentLocation;

          if (lat && lng) {
            locationsData.push({
              lat,
              lng,
              description:
                data.incidentDescription || "No description provided.",
            });
          }
        });

        setLocations(locationsData);
      } catch (error) {
        console.error("Error fetching locations: ", error);
      }
    };

    fetchLocations();
  }, []);

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: -26.2041, // Centered on Johannesburg
    lng: 28.0473,
  };

  const markerIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  };

  return (
    <div className="danger-alerts">
      <Link to="/main-page" className="custom-link">
        Back
      </Link>
      <header className="alert-header">
        <button className="alert-button">Danger Alerts</button>
      </header>

      <main className="alert-content">
        <h2>Danger Alerts Map</h2>
        <p>
          Please be aware of the following places that may cause harm for you!
        </p>
        <div className="map-container">
          <LoadScript
            googleMapsApiKey="AIzaSyB7T_hrPVTKwIT58qVdsPfrpXL5KcmsYhA"
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.lat, lng: location.lng }}
                  icon={markerIcon}
                  title={location.description}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <footer className="alert-footer">
          <p>Be Safe!</p>
        </footer>
      </main>
    </div>
  );
};

export default DangerAlerts;
