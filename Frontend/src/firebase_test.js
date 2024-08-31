import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import the initialized Firestore instance
import { collection, getDocs, addDoc } from "firebase/firestore"; // Import Firestore functions

const FirestoreExample = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

    const fetchUsers = async () => {
      try {
        console.log("Fetching users...");

        // Reference to the collection of users
        const usersCollectionRef = collection(db,"herguard"); // Adjust if 'users' is a collection within 'herguard'

        console.log("Collection Reference Path:", usersCollectionRef.path);

        const querySnapshot = await getDocs(usersCollectionRef);

        console.log("Number of documents fetched:", querySnapshot.size);

        const usersList = querySnapshot.docs.map((doc) => {
          const data = { id: doc.id, ...doc.data() };
          console.log("Document data:", data);
          return data;
        });

        console.log("Users List:", usersList);

        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

 useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  },

 []);

  // Function to handle form submission
  const handleAddUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Reference to the collection of users
      const usersCollectionRef = collection(db, "users");

      // Add a new document to the collection
      await addDoc(usersCollectionRef, {
        first_name: firstName,
        last_name: lastName,
      });

      // Reset the form fields
      setFirstName("");
      setLastName("");

      // Fetch and update the users list
      fetchUsers();
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <div>
      <h1>Users List</h1>

      {/* Form to add a new user */}
      <form onSubmit={handleAddUser}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>First Name:</strong> {user.first_name} <br />
            <strong>Last Name:</strong> {user.last_name} <br />
            {/* Display other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreExample;
