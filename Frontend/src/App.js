import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import MainPage from "./MainPage";
import ShareRide from "./ShareRide";
import ReportIncident from "./ReportIncident";
import Contact from "./Contacts";
import FirestoreExample from "./firebase_test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/firebase" element={<FirestoreExample />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/main-page/share-ride" element={<ShareRide />} />
        <Route path="/main-page/report-incident" element={<ReportIncident />} />
        <Route path="/main-page/contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
