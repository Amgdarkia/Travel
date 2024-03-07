import React, { useState } from 'react'

export default function RegisterTourist () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isGuide, setIsGuide] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the registration logic
        console.log('Form submitted', { firstName, lastName, mobile, email, password, confirmPassword });
        // You should include validation before logging or processing the form data
      };
      const toggleIsGuide = () => {
        setIsGuide(!isGuide);
    };
  return (
    <div>
    <h2>Register</h2>
    <button onClick={toggleIsGuide} className="toggle-button">
                Register as {isGuide ? 'Tourist' : 'Guide'}
    </button>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </label>
      </div>
      <div>
        <label>
          Last name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </label>
      </div>
      <div>
        <label>
          Mobile
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile"
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </label>
      </div>
      <div>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">By clicking you agree to our Terms and conditions</label>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  )
}
