import React from 'react';
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
import Home from './pages/Home';
import DangerAlerts from './components/DangerAlerts/DangerAlerts';
import CommunityReporting from './components/CommunityReporting/CommunityReporting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        {/* Temporarily set a path you want to test as the default route. I have put Login for simplicity purposes but it can be changed*/}
        <Route path='/homepage' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="main-page" element={<MainPage />} />
        <Route path="main-page/report-incident" element={<ReportIncidents />} />
        <Route path="main-page/share-ride" element={<ShareLocation />} />
        <Route path="main-page/contacts" element={<Contacts />} />
        <Route path="/ShareLocation" element={<ShareLocation />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/DangerAlerts' element={<DangerAlerts/>} />
        <Route path='/CommunityReporting' element={<CommunityReporting/>} />
        <Route path="main-page/profile" element={<Profile />} />
        <Route path="main-page/settings" element={<Settings />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/FAQ" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;