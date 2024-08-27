import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to KrushiMitra</h1>
      <p style={styles.subheading}>
        Revolutionizing the agricultural marketplace through technology and innovation.
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/about-us" style={styles.link}>
          <button style={styles.button}>About Us</button>
        </Link>
        <Link to="/contact-us" style={styles.link}>
          <button style={styles.button}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#e8f5e9',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '48px',
    color: '#2e7d32',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '24px',
    color: '#388e3c',
    marginBottom: '40px',
    maxWidth: '600px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#43a047',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
  },
};

export default HomePage;
