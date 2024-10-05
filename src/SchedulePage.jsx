import React, { useState } from 'react';

function SchedulePage() {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickupDate && pickupTime) {
      setMessage(`Pickup scheduled for ${pickupDate} at ${pickupTime}.`);
      // Here you can add functionality to send the data to your backend
    } else {
      setMessage('Please select both date and time.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Schedule Pickup</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Select Pickup Date:
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label>
          Select Pickup Time:
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Schedule Pickup
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: '#2e7d32',
  },
};

export default SchedulePage;
