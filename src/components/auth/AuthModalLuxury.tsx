import React, { useState } from 'react';
import { countries } from 'countries-list'; // You may need to install this package

const AuthModalLuxury = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSendOtp = () => {
    if (!validateEmail(email) || !country) {
      setError('Please provide a valid email and select a country.');
      return;
    }
    // Simulate OTP sending process
    console.log(`Sending OTP to ${email}...`);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification process
    console.log(`Verifying OTP: ${otp}...`);
    // Add verification logic here
  };

  return (
    <div>
      <h2>Auth Modal</h2>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(countries).map((key) => (
            <option key={key} value={countries[key].name}>{countries[key].name}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleSendOtp}>Send OTP</button>
      </div>
      {otpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthModalLuxury;
