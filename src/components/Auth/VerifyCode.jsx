import React, { useState } from "react";
import logo from "./assets/logo.jpg"; // Assuming you have a logo in the assets folder
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to search for account using identifier (email/phone)
    console.log("Searching account for:", identifier);
  };

  return (
    <div className="forgot-password-container">
      {/* Left Section - Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Right Section - Form */}
      <div className="form-section">
        <h2>Find Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter the verification code sent to your email (phone number)
            xxx@xxx.com (0xxxxxxxxx)
          </label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <button type="submit" className="search-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
