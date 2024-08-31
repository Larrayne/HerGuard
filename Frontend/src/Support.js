import React from 'react';
import { useNavigate } from "react-router-dom";
import './Support.css'; 

function Support() {
  const navigate = useNavigate()
  return (
    <div className="help-support-bg">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 className="help-support-heading">
        Hey Girl Pal, How can we help you?
      </h1>
      <div className="help-support-buttons">
        <div className="help-support-button">
          <i className="fas fa-headset contact-support-icon"></i>
          <span>Contact Support</span>
        </div>
        <div className="help-support-button">
          <i className="fas fa-shield-alt safety-resources-icon"></i>
          <span>Safety Resources</span>
        </div>
        <div className="help-support-button">
          <i className="fas fa-lock privacy-security-tips-icon"></i>
          <span>Privacy, Security and Tips</span>
        </div>
      </div>
      <div className="bookmark-container">
        <div className="bookmark-shape">
          <p className="bookmark-text">
            You Still Have A Question?
            <br />
            Email us @ her.gmail.com
            <br />
            or call @ 001 00200
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
