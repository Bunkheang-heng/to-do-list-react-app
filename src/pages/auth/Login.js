import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AuthLayout from '../../components/AuthLayout';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import { authService } from '../../utils/auth';
import { useAuth } from '../../hook/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      navigate('/home', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const result = authService.login(formData.email, formData.password);
      
      if (result.success) {
        toast.success('Login successful!');
        // Session is already stored in localStorage by authService.login
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        toast.error(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in to continue to LeadUp"
      >
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-lg text-gray-700 dark:text-gray-300">Loading...</div>
        </div>
      </AuthLayout>
    );
  }

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

