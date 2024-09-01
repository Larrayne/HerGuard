import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db, storage } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function ReportIncident() {
  const [incidentDetails, setIncidentDetails] = useState({
    userName: "",
    description: "",
    media: null,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setIncidentDetails((prevDetails) => ({
      ...prevDetails,
      media: e.target.files[0],
    }));
  };

  const handleMapClick = (e) => {
    setSelectedLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, description, media } = incidentDetails;
    let fileUrl = "";

    try {
      // If there's a file, upload it to Firebase Storage
      if (media) {
        const storageRef = ref(storage, "incidentMedia/" + media.name);
        const snapshot = await uploadBytes(storageRef, media);
        fileUrl = await getDownloadURL(snapshot.ref);
      }

      // Save report to Firestore
      await addDoc(collection(db, "reports"), {
        userName: userName,
        incidentLocation: selectedLocation,
        incidentDescription: description,
        fileUrl: fileUrl,
        createdAt: new Date(),
      });

      alert("Report submitted successfully!");
      setIncidentDetails({
        userName: "",
        description: "",
        media: null,
      });
      setSelectedLocation(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit report.");
    }
  };

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: -26.2041, // Default to Johannesburg
    lng: 28.0473,
  };

  return (
    <section className="report-incident">
      <h2>Report an Incident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Your Name..."
          value={incidentDetails.userName}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe the incident..."
          value={incidentDetails.description}
          onChange={handleChange}
          required
        />
        <input type="file" name="media" onChange={handleFileChange} />

        <div className="map-container">
          <LoadScript
            googleMapsApiKey="AIzaSyB7T_hrPVTKwIT58qVdsPfrpXL5KcmsYhA"
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
              onClick={handleMapClick}
            >
              {selectedLocation && <Marker position={selectedLocation} />}
            </GoogleMap>
          </LoadScript>
        </div>

        <button type="submit">Post</button>
        <Link to="/main-page">
          <button type="button">Back</button>
        </Link>
      </form>
    </section>
  );
}

export default ReportIncident;
