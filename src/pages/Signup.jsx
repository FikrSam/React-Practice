import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import InputField from "../components/InputField";
import '../App.css';
import PersonIcon from '../assets/Person Icon.svg';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Alfred's Note: This is a 'smart' handler.
    // It uses the 'name' of the input to update the matching key in formData.
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <img className="account-box" src={PersonIcon} alt="Icon"/>
            <h2>Welcome To Francc</h2>
            <p>Save Your Dabloons!</p>

            <form className="form-container">
                <InputField
                    label="Full Name"
                    type="text"
                    name="fullName"           // Must match state key exactly!
                    value={formData.fullName} // The wire from State -> Input
                    onChange={handleChange}   // The wire from Input -> State
                    placeholder="Abebe Kebede"
                />
                <InputField
                    label="Email" // Fixed typo "Email Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                />
                <InputField
                    label="Password"
                    type="password" // Changed to password so dots appear
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                />
                <InputField
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                />

                {/* Moved button inside form so 'Enter' key submits it */}
                <button className="signup-btn">Sign Up</button>
            </form>

            {/* Added text inside the Link so it is visible */}
            <p>Have an account? <Link to="/" className="link">Login</Link></p>
        </motion.div>
    );
};

export default Signup;
