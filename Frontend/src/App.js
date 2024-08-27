import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import MainPage from "./MainPage"; // Renamed to start with capital letter
import ShareRide from "./ShareRide"; // Removed hyphen from the file name to keep consistent with JS naming conventions
import ReportIncident from "./ReportIncident";
import Contact from "./Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main-page" element={<MainPage />}>
          <Route path="share-ride" element={<ShareRide />} />
          <Route path="report-incident" element={<ReportIncident />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
