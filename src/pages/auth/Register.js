import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AuthLayout from '../../components/AuthLayout';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      toast.warning('Password should be at least 6 characters long');
      return;
    }

    // Add your registration logic here
    console.log('Register:', formData);
    
    // Simulate API call - Replace with your actual registration logic
    try {
      // Simulate successful registration
      toast.success('Account created successfully!');
      
      // Navigate to login after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Sign up to get started with LeadUp"
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
          icon={<FaUser />}
        />

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
          placeholder="Create a strong password"
          value={formData.password}
          onChange={handleChange}
          required
          icon={<FaLock />}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          icon={<FaLock />}
        />

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              fontSize: "0.9em",
              color: "#4a5568",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" required style={{ marginTop: "4px" }} />
            <span>
              I agree to the{' '}
              <Link
                to="/terms"
                style={{
                  color: "#ff6b35",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                style={{
                  color: "#ff6b35",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <Button type="submit" variant="primary" fullWidth>
          Create Account
        </Button>

        <div
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontSize: "0.95em",
            color: "#4a5568",
          }}
        >
          Already have an account?{' '}
          <Link
            to="/login"
            style={{
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}