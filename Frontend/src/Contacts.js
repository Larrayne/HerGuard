import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase"; // Import Firebase Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";

function Contact() {
  const [location, setLocation] = useState("Sandton");
  const [contacts, setContacts] = useState([]); // State for user-added contacts
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [showAddContact, setShowAddContact] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  // Static data for helplines
  const helplines = [
    { name: "Sandton Police Station", phone: "011-722-1234" },
    { name: "Morningside Hospital", phone: "011-883-4567" },
  ];

  useEffect(() => {
    // Load user-added contacts from Firestore when the component mounts
    const loadContacts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "emergency-contacts")
        );
        const contactsList = querySnapshot.docs.map((doc) => doc.data());
        setContacts(contactsList);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };

    loadContacts();
  }, []);

  const handleAddContact = async () => {
    if (newContact.name && newContact.number) {
      try {
        // Add new contact to Firestore
        await addDoc(collection(db, "emergency-contacts"), newContact);
        setContacts([...contacts, newContact]);
        setNewContact({ name: "", number: "" });
        alert("Contact added successfully!");
        setShowAddContact(false);
      } catch (error) {
        console.error("Error adding contact: ", error);
        alert("Failed to add contact.");
      }
    } else {
      alert("Please fill in both the name and number.");
    }
  };

  // Common style for buttons
  const buttonStyle = {
    display: "block",
    margin: "10px 0",
    width: "150px", // Set a fixed width for all buttons
  };

  const inputContainerStyle = {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    width: "300px", // Set a fixed width for better alignment
  };

  const labelStyle = {
    marginRight: "10px",
    width: "80px",
  };

  const contactItemStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "5px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div
      className="contact-page"
      style={{ backgroundColor: "#fbe8e6", padding: "20px" }}
    >
      <h2><u>Helplines</u></h2>
      <p>Location: {location}</p>
      <ul>
        {helplines.map((helpline, index) => (
          <li key={index}>
            {helpline.name}: {helpline.phone}
          </li>
        ))}
      </ul>

      <h2><u>Emergency Contacts</u></h2>

      {showAddContact ? (
        <div style={{ marginBottom: "20px" }}>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              value={newContact.name}
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
              required
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Number:</label>
            <input
              type="text"
              name="number"
              placeholder="Number..."
              value={newContact.number}
              onChange={(e) =>
                setNewContact({ ...newContact, number: e.target.value })
              }
              required
            />
          </div>
          <button style={buttonStyle} onClick={handleAddContact}>
            Save Contact
          </button>
        </div>
      ) : (
        <button style={buttonStyle} onClick={() => setShowAddContact(true)}>
          Add Contact
        </button>
      )}

      {showContacts ? (
        <div style={{ marginBottom: "20px" }}>
          <h3>Your Contacts:</h3>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <span>{"Name: " + contact.name + "     "}</span>
                <span>{"Number: " + contact.number+ "     "}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button style={buttonStyle} onClick={() => setShowContacts(true)}>
          View Contacts
        </button>
      )}

      <Link to="/main-page">
        <button style={buttonStyle}>Back</button>
      </Link>
    </div>
  );
}

export default Contact;
