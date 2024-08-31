import React from 'react';
import { useNavigate } from "react-router-dom";
import './FAQStyling.css'; 

function FAQ() {
  const navigate = useNavigate();
  return (
    <div className="custom-bg">
      <div className="bg-pink">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="faq-bg">Frequently Asked Questions</div>
        <div className="faq-content">
          <div className="faq-section">
            <h2>General</h2>
            <div className="faq-question">1. What is HerGuard?</div>
            <div className="faq-answer">
              - HerGuard is a safety web app that allows users to quickly alert
              emergency contacts and access important safety resources.
            </div>
            <div className="faq-question">2. Is HerGuard free?</div>
            <div className="faq-answer">- Yes, HerGuard is free to use.</div>
          </div>
          <div className="faq-section">
            <h2>Alerts</h2>
            <div className="faq-question">1. How do I send an Alert?</div>
            <div className="faq-answer">
              - To send an Alert, you simply click the “Send Alert” button.
            </div>
            <div className="faq-question">
              2. Can I customize my alert message?
            </div>
            <div className="faq-answer">
              - Yes, you can customize your alert messages to include your name,
              location, and a brief message.
            </div>
          </div>
          <div className="faq-section">
            <h2>Safety Resources</h2>
            <div className="faq-question">
              1. What safety resources are available on HerGuard?
            </div>
            <div className="faq-answer">
              - HerGuard offers a wide range of safety resources including
              emergency contacts, safety tips, etc.
            </div>
          </div>
          <div className="faq-section">
            <h2>Support</h2>
            <div className="faq-question">1. How do I contact support?</div>
            <div className="faq-answer">
              - You can reach our support team at example@gmail.com.
            </div>
            <div className="faq-question">2. What are the support hours?</div>
            <div className="faq-answer">- Our support team is available...</div>
          </div>
        </div>
      </div>
      <div className="key-features">
        <h2>Key Features</h2>
        <p>
          <strong>Real-time Alerts:</strong> This will allow you to receive
          quick notifications about incidents, unsafe places, or any alerts
          which are posted.
        </p>
        <p>
          <strong>Community Reviews:</strong> On this page, you will get to see
          others sharing their stories and experiences.
        </p>
        <p>
          <strong>Incident Report & Safety Tips:</strong> With this, you will be
          able to see incidents which have happened and also safety tips to help
          you stay safe.
        </p>
        <p>
          <strong>Safe Zones & Emergency Contacts:</strong> With this, you will
          be able to add and connect with your emergency contacts and also get
          reports of safe zones you can wait in for help.
        </p>
        <p>
          <strong>Transport & Safe Rides:</strong> This feature helps you know
          which rides you can take and which rides to be wary of and also allows
          you to share your location with trusted contacts and share driver
          information.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
