import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import MainPage from './MainPage';
import Contacts from './Contacts';
import ReportIncidents from './ReportIncident';
import FAQ from './FAQ';
import ShareLocation from './ShareLocation';  
import Support from './Support'
import ForgotPassword from './ForgotPassword';
import Profile from './Profile';
import Settings from './Settings';
import Home from './Home';
import DangerAlerts from './DangerAlerts';
import CommunityReporting from './CommunityReporting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="main-page" element={<MainPage />} />
        <Route path="main-page/report-incident" element={<ReportIncidents />} />
        <Route path="main-page/share-location" element={<ShareLocation />} />
        <Route path="main-page/contacts" element={<Contacts />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="main-page/profile" element={<Profile />} />
        <Route path='main-page/DangerAlerts' element={<DangerAlerts/>} />
        <Route path='main-page/CommunityReporting' element={<CommunityReporting/>} />
        <Route path="main-page/settings" element={<Settings />} />
        <Route path="main-page/FAQ" element={<FAQ />} />
        <Route path="main-page/support" element={<Support />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;