import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db, storage } from './firebase.js'; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ReportIncident() {
  const [incidentDetails, setIncidentDetails] = useState({
    userName: "",
    location:"",
    description: "",
    media: null,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, location, description, media } = incidentDetails;
    let fileUrl = '';

    try {
      // If there's a file, upload it to Firebase Storage
      if (media) {
        const storageRef = ref(storage, 'incidentMedia/' + media.name);
        const snapshot = await uploadBytes(storageRef, media);
        fileUrl = await getDownloadURL(snapshot.ref);
      }

      // Save report to Firestore
      await addDoc(collection(db, "reports"), {
        userName: userName,
        incidentLocation: location,
        incidentDescription: description,
        fileUrl: fileUrl,
        createdAt: new Date()
      });

      alert('Report submitted successfully!');
      // Clear the form
      setIncidentDetails({
        userName: "",
        location:"",
        description: "",
        media: null,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to submit report.');
    }
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
        <input
          type="text"
          name="location"
          placeholder="Your Location..."
          value={incidentDetails.location}
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
        <input
          type="file"
          name="media"
          onChange={handleFileChange}
        />
        <button type="submit">Post</button>
        <Link to="/main-page">
          <button type="button">Back</button>
        </Link>
      </form>
    </section>
  );
}

export default ReportIncident;
