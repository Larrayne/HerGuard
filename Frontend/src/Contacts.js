import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 

function Contact() {
  const [location, setLocation] = useState("Unknown Location");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Dummy data for nearest emergency contacts
    const dummyContacts = [
      { name: "Sandton Police Station", phone: "011-722-1234" },
      { name: "Morningside Hospital", phone: "011-883-4567" },
    ];
    setContacts(dummyContacts);

    // If you have the user's location, you can update it here
    // setLocation('Johannesburg, Sandton');
  }, []);

  return (
    <div
      className="contact-page"
      style={{ backgroundColor: "#fbe8e6", padding: "20px" }}
    >
      <h2>Emergency Contacts</h2>
      <p>Location: {location}</p>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name}: {contact.phone}
          </li>
        ))}
      </ul>
      <Link to="/main-page"><button>Back</button></Link>
    </div>
    
  );
}

export default Contact;
