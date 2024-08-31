import React, { useState } from "react";
import "./Profile.css"; // Create this CSS file for styling
import { useNavigate } from "react-router-dom";



function Profile() {
  const navigate = useNavigate();
  const [privateProfile, setPrivateProfile] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [receiveMessages, setReceiveMessages] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="profile-image-container">
        <i className="fa-regular fa-user"></i>
        <h2>John Doe</h2>
      </div>
      <div className="profile-info">
        <div>Username</div>
        <div>Website</div>
        <div>Bio</div>
        <div className="profile-setting">
          <span>Private profile</span>
          <input
            type="checkbox"
            checked={privateProfile}
            onChange={() => setPrivateProfile(!privateProfile)}
          />
        </div>
        <div className="profile-setting">
          <span>Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
        <div className="profile-setting">
          <span>Receive messages</span>
          <input
            type="checkbox"
            checked={receiveMessages}
            onChange={() => setReceiveMessages(!receiveMessages)}
          />
        </div>
      </div>
      <div className="profile-footer">
        <button className="footer-button">Home</button>
        <button className="footer-button">Reports</button>
        <button className="footer-button">Search</button>
        <button className="footer-button active">Profile</button>
      </div>
    </div>
  );
}

export default Profile;
