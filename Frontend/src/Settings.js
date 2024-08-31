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
      <div className="faq-container">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Ffaq-icon&psig=AOvVaw1JGcwU8Lm8GxfWX_aKqRWB&ust=1724876164318000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKD9_8r-lYgDFQAAAAAdAAAAABAE"
          alt="FAQ"
          className="faq-image"
        />
      </div>
    </div>
  );
}

export default Settings;
