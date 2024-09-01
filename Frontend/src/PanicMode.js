// src/components/PanicMode.js
import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Import your Firebase setup
import { getDocs, collection } from "firebase/firestore";
import axios from "axios";

function PanicMode() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");

  // Function to fetch contacts from Firestore
  const fetchContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "emergency-contacts"));
      const contactsList = querySnapshot.docs.map((doc) => doc.data().email); // Assuming each doc has an 'email' field
      setContacts(contactsList);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
    }
  };

  // Function to handle sending alerts
  const handleSendAlerts = async () => {
    if (contacts.length === 0) {
      alert("No contacts found to send alerts to.");
      return;
    }

    try {
      // Call Firebase function to send emails
      await axios.post("https://us-central1-your-project-id.cloudfunctions.net/sendAlertEmails", {
        contacts: contacts,
      });
      setMessage(`Alerts sent to: ${contacts.join(", ")}`);
    } catch (error) {
      console.error("Error sending alerts: ", error);
      setMessage("Failed to send alerts.");
    }
  };

  // Load contacts when component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#fbe8e6" }}>
      <h2>Panic Mode</h2>
      <button onClick={handleSendAlerts} style={{ padding: "10px 20px", margin: "10px 0" }}>
        Send Emergency Alerts
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PanicMode;
