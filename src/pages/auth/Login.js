import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AuthLayout from '../../components/AuthLayout';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your login logic here
    console.log('Login:', formData);
    
    // Example validation
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Simulate API call - Replace with your actual login logic
    try {
      // Simulate successful login
      toast.success('Login successful!');
      
      // Navigate to home after successful login
      setTimeout(() => {
        navigate('/task');
      }, 1500);
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to LeadUp"
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          icon={<FaEnvelope />}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          icon={<FaLock />}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9em",
              color: "#4a5568",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" />
            Remember me
          </label>
          <Link
            to="/forgot-password"
            style={{
              fontSize: "0.9em",
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" variant="primary" fullWidth>
          Sign In
        </Button>

        <div
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "0.95em",
            color: "#4a5568",
          }}
        >
          Don't have an account?{' '}
          <Link
            to="/register"
            style={{
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Sign Up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}