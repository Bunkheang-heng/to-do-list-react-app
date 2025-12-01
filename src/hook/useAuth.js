import { useState, useEffect } from 'react';
import { authService } from '../utils/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        // Check if user is authenticated using the auth service
        const isAuth = authService.isAuthenticated();
        if (isAuth) {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          } else {
            // Token exists but user data is missing, clear session
            authService.logout();
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, loading, isAuthenticated: !!user };
};

export default useAuth; 

