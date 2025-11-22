import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import InputField from "../components/InputField";
import "../App.css";
import PersonIcon from "../assets/Person Icon.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Motion.div
      className="container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.2 }}
    >
      <img className="account-box" src={PersonIcon} alt="Icon" />
      <h2>Welcome To Francc</h2>
      <p>Save Your Dabloons!</p>

      <form className="form-container">
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Abebe Kebede"
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          autocomplete="off"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          autocomplete="new-password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          autocomplete="new-password"
        />

        <button className="signup-btn">Sign Up</button>
      </form>
      <p>
        Have an account?{" "}
        <Link to="/" className="link">
          Login
        </Link>
      </p>
    </Motion.div>
  );
};

export default Signup;
