import React from 'react';
import { useLocation } from 'react-router-dom';

function PanicMode() {
  const location = useLocation();
  const { state } = location;
  const message = state?.message || "No message available.";

  return (
    <div style={{ padding: "20px", backgroundColor: "#fbe8e6" }}>
      <h2>Alert Confirmation</h2>
      <p>{message}</p>
    </div>
  );
}

export default PanicMode;
