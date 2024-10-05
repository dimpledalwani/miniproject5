import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.description}>
        Welcome to Goodwill, where we empower communities through generous donations and impactful initiatives.
      </p>
      <h2>Our Mission</h2>
      <p style={styles.description}>
        Our mission is to create a platform that connects donors with those in need, facilitating meaningful contributions that foster positive change in society. We aim to streamline the donation process and ensure transparency and trust between all parties involved.
      </p>
      <h2>Our Features</h2>
      <ul style={styles.list}>
        <li>**User Registration and Login**: Secure and easy access to your account.</li>
        <li>**Donation Marketplace**: Discover and support various causes and initiatives.</li>
        <li>**Project Listings**: Browse projects in need of funding and support.</li>
        <li>**Secure Transactions**: Safe payment processing for all donations.</li>
        <li>**Impact Tracking**: Monitor the impact of your contributions and see how they make a difference.</li>
        <li>**Feedback System**: Share your experiences and help build a community of trust.</li>
        <li>**Real-Time Updates**: Stay informed about the progress of the projects you support.</li>
        <li>**Photo and Video Updates**: View updates from beneficiaries to see the impact of your donations.</li>
        <li>**Notifications**: Receive updates on your donations and new projects.</li>
        <li>**Diverse Causes**: Support a wide range of causes, from education to healthcare and environmental sustainability.</li>
        <li>**Multilingual Support**: Access the platform in multiple languages for a broader reach.</li>
      </ul>
      <h2>Our Team</h2>
      <p style={styles.description}>
        Our team is passionate about driving social change and providing a seamless experience for both donors and beneficiaries. We are committed to making a positive impact in communities and ensuring that every contribution counts.
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
