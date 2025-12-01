import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaIdCard, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../hook/useAuth';
import { authService } from '../utils/auth';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleLogout = () => {
    const result = authService.logout();
    if (result.success) {
      toast.success('Logged out successfully');
      navigate('/login');
    } else {
      toast.error('Logout failed');
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return <Loading />;
  }

  // If user is not available, show error or redirect
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-lg text-red-600 dark:text-red-400 mb-2">User data not available</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Please log in again</div>
        </div>
      </div>
    );
  }

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="flex flex-col gap-6 max-w-5xl mx-auto w-full px-4 py-6">
      {/* Page Header */}
      <div className="mb-2">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-white dark:text-white tracking-tight">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          View and manage your account information
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              {getInitials(user?.fullName)}
            </div>
          </div>

          {/* User Details */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
              {user?.fullName || 'User'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-1 break-all">
              {user?.email || 'N/A'}
            </p>
            {user?.createdAt && (
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-3">
                Member since {formatDate(user.createdAt)}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            Account Information
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your personal account details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FaUser className="text-blue-600 dark:text-blue-400 text-sm" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Full Name
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {user?.fullName || 'N/A'}
            </p>
          </div>

          {/* Email Address */}
          <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <FaEnvelope className="text-green-600 dark:text-green-400 text-sm" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Email Address
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
              {user?.email || 'N/A'}
            </p>
          </div>

          {/* User ID */}
          <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <FaIdCard className="text-purple-600 dark:text-purple-400 text-sm" />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                User ID
              </span>
            </div>
            <p className="text-base font-mono text-gray-900 dark:text-white">
              {user?.id || 'N/A'}
            </p>
          </div>

          {/* Member Since */}
          {user?.createdAt && (
            <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <FaCalendarAlt className="text-orange-600 dark:text-orange-400 text-sm" />
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Member Since
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatDate(user.createdAt)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Account Actions Section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            Account Actions
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            onClick={() => navigate('/setting')}
            fullWidth
          >
            <FaCog className="text-xs" />
            Edit Settings
          </Button>
          <Button
            variant="secondary"
            onClick={handleLogout}
            fullWidth
          >
            <FaSignOutAlt className="text-xs" />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
}
