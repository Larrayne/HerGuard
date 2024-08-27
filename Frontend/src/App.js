import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import mainPage from ".Main-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/main-page" element={<mainPage />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
