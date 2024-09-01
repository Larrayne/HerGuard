import React, { useState } from "react";
import "./Profile.css"; // Create this CSS file for styling
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Profile() {
  const navigate = useNavigate();
  const [privateProfile, setPrivateProfile] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [receiveMessages, setReceiveMessages] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-header">
      <Link to="/main-page"><button>Back</button></Link>
      </div>
      <div className="profile-image-container">
      <i className="fa-regular fa-user" ></i>
      <h2>John Doe</h2>
      </div>
      <div className="profile-info">
        <div>Username  : Johnny</div>
        <div>Website  : <a href=" https://www.instagram.com">Instagram</a> </div>
        <div>Bio</div>
        <p>Just your normal guy from the neighbourhood</p>
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
    
    </div>
  );
}

export default Profile;
