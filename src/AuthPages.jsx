import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SchedulePage from './SchedulePage';
import DonationPage from './DonationPage'; // Import the DonationPage

function AuthPages() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/donation" element={<DonationPage />} /> {/* Add this line */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </>
      )}
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AuthPages />
    </Router>
  );
}
