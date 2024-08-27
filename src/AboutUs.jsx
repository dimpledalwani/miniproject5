import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.description}>
        Welcome to KrushiMitra, where we revolutionize the way farmers and buyers interact through innovative technology and smart contracts.
      </p>
      <h2>Our Mission</h2>
      <p style={styles.description}>
        Our mission is to bridge the gap between farmers and buyers by providing a comprehensive platform that facilitates easy contract creation, secure transactions, and transparent communication. We aim to empower farmers and buyers by integrating cutting-edge technology to streamline the agricultural supply chain.
      </p>
      <h2>Our Features</h2>
      <ul style={styles.list}>
        <li>**User Registration and Login**: Secure and straightforward access to your account.</li>
        <li>**Crop Marketplace**: Browse and list crops with ease.</li>
        <li>**Smart Contracts**: Create and manage contracts using blockchain technology.</li>
        <li>**Escrow Payments**: Secure transactions with escrow account management.</li>
        <li>**Recommendation System**: Rate and review transactions to build trust and reliability.</li>
        <li>**Contract Negotiation Tracker**: Keep track of all contract negotiations.</li>
        <li>**Market Price Integration**: Access real-time market prices for informed decisions.</li>
        <li>**Photo Uploads**: Share plantation updates to keep buyers informed.</li>
        <li>**Notifications**: Receive timely reminders for contract deadlines.</li>
        <li>**Contract Variety Selection**: Choose from various contract types to fit your needs.</li>
        <li>**Government Schemes Integration**: Access relevant government schemes and benefits.</li>
        <li>**Multilingual Support**: Access the platform in multiple languages for a global reach.</li>
      </ul>
      <h2>Our Team</h2>
      <p style={styles.description}>
        Our team is dedicated to bringing you the best in agricultural technology. We are passionate about supporting farmers and buyers alike, ensuring a seamless and efficient experience on our platform.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  description: {
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
};

export default AboutUs;
