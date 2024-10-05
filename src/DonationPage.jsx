import React, { useState } from 'react';
import RewardsPage from './RewardsPage'; // Import the RewardsPage component

function DonationPage() {
  const [donationType, setDonationType] = useState('');
  const [formData, setFormData] = useState({
    foodMadeDate: '',
    foodShelfLife: '',
    foodServingSize: '',
    foodContainsOnionGarlic: '',
    clothingSize: '',
    clothingCondition: '',
    clothingNewOrUsed: '',
    clothingType: '',
    clothingImage: null,
    otherDescription: '',
    otherImage: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [reward, setReward] = useState(null);
  const [previousRewards, setPreviousRewards] = useState([]);

  const handleTypeChange = (e) => {
    setDonationType(e.target.value);
    setFormData({
      foodMadeDate: '',
      foodShelfLife: '',
      foodServingSize: '',
      foodContainsOnionGarlic: '',
      clothingSize: '',
      clothingCondition: '',
      clothingNewOrUsed: '',
      clothingType: '',
      clothingImage: null,
      otherDescription: '',
      otherImage: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Data Submitted:', { donationType, formData });

    // Simulate receiving a reward after form submission
    const newReward = {
      title: '10% Off Coupon',
      description: 'Use this coupon to get 10% off your next purchase at our store.',
      code: 'THANKYOU10',
    };

    setPreviousRewards([...previousRewards, newReward]);
    setReward(newReward);
    setSubmitted(true);
  };

  if (submitted) {
    return <RewardsPage reward={reward} previousRewards={previousRewards} />;
  }

  return (
    <div style={styles.container}>
      <h1>Donate to Goodwill</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          <input
            type="radio"
            value="food"
            checked={donationType === 'food'}
            onChange={handleTypeChange}
          />
          Food
        </label>
        <label>
          <input
            type="radio"
            value="clothes"
            checked={donationType === 'clothes'}
            onChange={handleTypeChange}
          />
          Clothes
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={donationType === 'other'}
            onChange={handleTypeChange}
          />
          Other
        </label>

        {donationType === 'food' && (
          <>
            <input
              type="date"
              name="foodMadeDate"
              value={formData.foodMadeDate}
              onChange={handleChange}
              placeholder="When was the food made?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="foodShelfLife"
              value={formData.foodShelfLife}
              onChange={handleChange}
              placeholder="What is the shelf life?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="foodServingSize"
              value={formData.foodServingSize}
              onChange={handleChange}
              placeholder="For how many people does this serve?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="foodContainsOnionGarlic"
              value={formData.foodContainsOnionGarlic}
              onChange={handleChange}
              placeholder="Does this food contain onion and garlic?"
              required
              style={styles.input}
            />
          </>
        )}

        {donationType === 'clothes' && (
          <>
            <input
              type="text"
              name="clothingSize"
              value={formData.clothingSize}
              onChange={handleChange}
              placeholder="What is the clothing size?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="clothingCondition"
              value={formData.clothingCondition}
              onChange={handleChange}
              placeholder="What is the condition of the clothing?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="clothingNewOrUsed"
              value={formData.clothingNewOrUsed}
              onChange={handleChange}
              placeholder="Is the clothing new or used?"
              required
              style={styles.input}
            />
            <input
              type="text"
              name="clothingType"
              value={formData.clothingType}
              onChange={handleChange}
              placeholder="What type of clothing is it? (e.g., shirt, pants, jacket)"
              required
              style={styles.input}
            />
            <input
              type="file"
              name="clothingImage"
              onChange={handleChange}
              accept="image/*"
              required
              style={styles.input}
            />
          </>
        )}

        {donationType === 'other' && (
          <>
            <textarea
              name="otherDescription"
              value={formData.otherDescription}
              onChange={handleChange}
              placeholder="Please describe the item you want to donate"
              required
              style={styles.textarea}
            />
            <input
              type="file"
              name="otherImage"
              onChange={handleChange}
              accept="image/*"
              required
              style={styles.input}
            />
          </>
        )}

        <button type="submit" style={styles.button}>
          Submit Donation
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
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
  textarea: {
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
};

export default DonationPage;
