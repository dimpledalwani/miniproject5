import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import LoginPage from './assets/LoginPage';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function AuthPages() {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login and Signup
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleSignup = () => {
    // Perform signup logic here (ignoring captcha)
    setIsLogin(true);  // Redirect to the login page after signup
    navigate('/');     // Ensure the login page loads
  };

  const toggleAuthPage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route
            path="/"
            element={isLogin ? <LoginPage onLogin={handleLogin} toggleAuthPage={toggleAuthPage} /> : <Navigate to="/signup" replace />}
          />
          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} toggleAuthPage={toggleAuthPage} />}
          />
        </>
      ) : (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
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
