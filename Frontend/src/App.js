import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import mainPage from ".Main-page";
import ShareRide from "./ShareRide";
import ReportIncident from "./ReportIncident";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/main-page" element={<mainPage />}>
          <Route path="/share-ride" component={ShareRide} />
          <Route path="/report-incident" component={ReportIncident} />
          <Route path="/contact" component={Contact} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
