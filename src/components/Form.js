import React, { useState } from "react";
import "../index.css";
import companyLogo from "../assets/EZ Works Blue.png";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 422) {
        setError(data.detail || "Emails ending with @ez.works are not allowed");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setError("An error occurred");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  const handleFocus = () => {
    setError("");
    setMessage("");
  };

  return (
    <div className="formSection">
      <div className="leftSection">
        <img src={companyLogo} alt="EZ Works Logo" className="logo" />
        <h3>Suite Of Business Support Services</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="submit">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
            />
            <button type="submit">Contact Us</button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Form;
