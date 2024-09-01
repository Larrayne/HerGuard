import React from "react";
import "./Settings.css"; 
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCog } from "react-icons/fa"; // Using react-icons for back and settings icons

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <div className="settings-header">
        <FaArrowLeft className="icon" onClick={() => navigate(-1)} />
        <FaCog className="icon" onClick={() => alert("Settings")} />
      </div>
      <div className="profile-image-container">
      <i className="fa-regular fa-user" ></i>
      </div>
      <div className="settings-options">
        <button className="settings-button">My Profile</button>
        <button className="settings-button">Notifications</button>
        <button className="settings-button">Privacy</button>
        <button className="settings-button">Theme</button>
        <button className="settings-button">Help</button>
      </div>
    
    </div>
  );
}

export default Settings;
