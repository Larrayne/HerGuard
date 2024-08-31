import React, { useState } from "react";

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
    <div
      className="report-incident-page"
      style={{ backgroundColor: "#fbe8e6", padding: "20px" }}
    >
      <h2>Report Incident</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={incidentDetails.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Exact Location:</label>
          <input
            type="text"
            name="location"
            value={incidentDetails.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Upload Media Evidence:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportIncident;
