import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '2rem',
      color: '#333',
    },
    subheading: {
      fontSize: '1.2rem',
      color: '#666',
    },
    buttonContainer: {
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      margin: '5px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Goodwill</h1>
      <p style={styles.subheading}>
        Empowering communities through your generous donations.
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/about-us" style={styles.link}>
          <button style={styles.button}>About Us</button>
        </Link>
        <Link to="/contact-us" style={styles.link}>
          <button style={styles.button}>Contact Us</button>
        </Link>
        <Link to="/schedule" style={styles.link}>
          <button style={styles.button}>Schedule Pickup</button>
        </Link>
        <Link to="/donation" style={styles.link}>
          <button style={styles.button}>Donate Now</button> {/* Add this button */}
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
