import React, { useState } from "react";

function ShareRide() {
  const [rideDetails, setRideDetails] = useState({
    carColor: "",
    licensePlate: "",
    driver: "",
    clothes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ride details submitted:", rideDetails);
    // Handle the submission, e.g., send data to the backend
  };

  return (
    <div
      className="share-ride-page"
      style={{ backgroundColor: "#fbe8e6", padding: "20px" }}
    >
      <h2>Share Ride Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car Color:</label>
          <input
            type="text"
            name="carColor"
            value={rideDetails.carColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>License Plate:</label>
          <input
            type="text"
            name="licensePlate"
            value={rideDetails.licensePlate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Driver:</label>
          <input
            type="text"
            name="driver"
            value={rideDetails.driver}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Clothes:</label>
          <input
            type="text"
            name="clothes"
            value={rideDetails.clothes}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ShareRide;
