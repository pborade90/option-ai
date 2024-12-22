// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Signup successful:", formData);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-background">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-primary-dark">Sign Up</h2>
        <p className="text-center text-primary-medium mt-2">Create your account</p>
        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-dark">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 bg-white border border-primary-accent text-primary-dark rounded-md focus:ring-2 focus:ring-primary-medium focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary-dark">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 bg-white border border-primary-accent text-primary-dark rounded-md focus:ring-2 focus:ring-primary-medium focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-dark">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 bg-white border border-primary-accent text-primary-dark rounded-md focus:ring-2 focus:ring-primary-medium focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary-medium text-white rounded-md hover:bg-primary-dark font-medium"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-primary-dark mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-dark underline font-medium">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
