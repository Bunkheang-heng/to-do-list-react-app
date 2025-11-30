import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../hook/useAuth';
import { authService } from '../utils/auth';
import Button from '../components/Button';

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    const result = authService.logout();
    if (result.success) {
      toast.success('Logged out successfully');
      navigate('/login');
    } else {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-[var(--color-text)] transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* CARD */}
      <div
        className="
          rounded-[var(--radius-card)]
          bg-[var(--color-box-bg)]
          border border-[var(--color-bg-alt)]
          shadow-md
          p-6 mb-6
          transition-colors duration-300
        "
      >
        <div className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-subtle)] mb-1">
              Full Name
            </label>
            <div className="text-lg text-[var(--color-text)]">{user.fullName}</div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-subtle)] mb-1">
              Email Address
            </label>
            <div className="text-lg text-[var(--color-text)]">{user.email}</div>
          </div>

          {/* User ID */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-subtle)] mb-1">
              User ID
            </label>
            <div className="text-sm text-[var(--color-subtle)]">{user.id}</div>
          </div>

          {/* Member Since */}
          {user.createdAt && (
            <div>
              <label className="block text-sm font-medium text-[var(--color-subtle)] mb-1">
                Member Since
              </label>
              <div className="text-sm text-[var(--color-subtle)]">
                {new Date(user.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => navigate('/setting')}>
          Edit Settings
        </Button>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
