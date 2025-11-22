import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import InputField from "../components/InputField";
// import '../assets';
import "../App.css";
import PersonIcon from "../assets/Person Icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", email, password);
  };

  return (
    <Motion.div
      className="container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img className="account-box" src={PersonIcon} alt="Icon" />
      <h2>Welcome to Francc</h2>
      <p>Save Your Dabloons!!</p>

      <form onSubmit={handleSubmit} className="form-container">
        <InputField
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete="off"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="new-password"
        />

        <button className="login-btn">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </p>
    </Motion.div>
  );
};

export default Login;
