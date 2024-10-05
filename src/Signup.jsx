import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Select from 'react-select';



// Sample states and cities data for dropdowns
const states = [
  { value: 'ap', label: 'Andhra Pradesh' },
  { value: 'ar', label: 'Arunachal Pradesh' },
  { value: 'as', label: 'Assam' },
  { value: 'br', label: 'Bihar' },
  { value: 'ch', label: 'Chhattisgarh' },
  { value: 'ga', label: 'Goa' },
  { value: 'gj', label: 'Gujarat' },
  { value: 'hr', label: 'Haryana' },
  { value: 'hp', label: 'Himachal Pradesh' },
  { value: 'jk', label: 'Jammu and Kashmir' },
  { value: 'jh', label: 'Jharkhand' },
  { value: 'ka', label: 'Karnataka' },
  { value: 'kl', label: 'Kerala' },
  { value: 'mp', label: 'Madhya Pradesh' },
  { value: 'mh', label: 'Maharashtra' },
  { value: 'mn', label: 'Manipur' },
  { value: 'ml', label: 'Meghalaya' },
  { value: 'mz', label: 'Mizoram' },
  { value: 'nl', label: 'Nagaland' },
  { value: 'or', label: 'Odisha' },
  { value: 'pb', label: 'Punjab' },
  { value: 'rj', label: 'Rajasthan' },
  { value: 'sk', label: 'Sikkim' },
  { value: 'tn', label: 'Tamil Nadu' },
  { value: 'tg', label: 'Telangana' },
  { value: 'tr', label: 'Tripura' },
  { value: 'up', label: 'Uttar Pradesh' },
  { value: 'ut', label: 'Uttarakhand' },
  { value: 'wb', label: 'West Bengal' },
  // Add more states here
];

const cities = {
  ap: [
    { value: 'vizag', label: 'Visakhapatnam' },
    { value: 'vijayawada', label: 'Vijayawada' },
    // Add more cities for Andhra Pradesh here
  ],
  mh: [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'pune', label: 'Pune' },
    // Add more cities for Maharashtra here
  ],
  up: [
    { value: 'lucknow', label: 'Lucknow' },
    { value: 'kanpur', label: 'Kanpur' },
    // Add more cities for Uttar Pradesh here
  ],
  // Add more states and their cities here
};

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: '',
    address: '',
    age: '',
    country: '',
    zipcode: '',
    phone: '+91',  // Initialize with +91
    email: '',
  });

  // const [captchaVerified, setCaptchaVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStateChange = (selectedOption) => {
    setFormData({
      ...formData,
      state: selectedOption.value,
      city: '', // Reset city when state changes
    });
  };

  const handleCityChange = (selectedOption) => {
    setFormData({
      ...formData,
      city: selectedOption.value,
    });
  };

  // const handleCaptchaChange = (value) => {
  //   if (value) {
  //     setCaptchaVerified(true);
  //   } else {
  //     setCaptchaVerified(false);
  //   }
  //   console.log('Captcha value:', value); // Logging the captcha value
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!captchaVerified) {
    //   alert("Please verify the CAPTCHA.");
    //   return;
    // }

    // Form submission logic
    console.log('Form submitted:', formData);
  };

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
  };

  const handlePrevious = () => {
    if (currentPage === 2) {
      setCurrentPage(1);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {currentPage === 1 ? (
          <>
            <h2>User Registration</h2> {/* Updated heading */}
            <div style={styles.inputGroup}>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            {/* <div style={styles.inputGroup}>
              <label>Captcha:</label>
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY" // Replace with your actual site key
                onChange={handleCaptchaChange}
                required
              />
              <div style={styles.captchaComment}>Please verify that you are not a robot.</div>
            </div> */}
            <button type="button" style={styles.navButton} onClick={handleNext}>Next</button>
          </>
        ) : (
          <>
            <h2>User Profile</h2> {/* Updated heading */}
            <div style={styles.inputGroup}>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>State:</label>
              <Select
                options={states}
                onChange={handleStateChange}
                placeholder="Select your state"
                isClearable
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>City:</label>
              <Select
                options={cities[formData.state] || []}
                onChange={handleCityChange}
                placeholder="Select your city"
                isClearable
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Zip Code:</label>
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Enter your zip code"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Phone No:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 Enter your phone number"
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <button type="button" style={styles.navButton} onClick={handlePrevious}>Previous</button>
            <button type="submit" style={styles.submitButton}>Login</button>
          </>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  navButton: {
    width: '48%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '2%',
  },
  captchaComment: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#555',
  },
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic (e.g., API call, data validation, etc.)
    console.log('Form submitted:', formData);

    // Assuming signup logic is successful, call the onSignup function
    onSignup();  // This will notify the parent component that signup was successful
};

export default Signup;