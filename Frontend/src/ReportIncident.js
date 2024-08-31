import React, { useState } from "react";
import { Link } from "react-router-dom";


function ReportIncident() {
  const [incidentDetails, setIncidentDetails] = useState({
    description: "",
    location: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Incident details submitted:", incidentDetails);
    // Handle the submission, e.g., send data to the backend
  };

  return (
<section className="report-incident">

                    <h2>Report an Incident</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Describe the incident..." className="incident-description"></textarea>
                        <input type="file" className="upload-image" />
                        <button type="submit" className="submit-report">Post</button>
                        <Link to="/main-page"><button>Back</button></Link>
                    </form>
                </section>
  );
}

export default ReportIncident;
