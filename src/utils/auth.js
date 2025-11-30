const AUTH_TOKEN_KEY = 'authToken';
const USER_DATA_KEY = 'userData';
const USERS_KEY = 'registeredUsers';

export const authService = {
  registerUser: (userData) => {
    try {
      const users = authService.getRegisteredUsers();
      const { confirmPassword, ...userToStore } = userData;
      
      const newUser = {
        id: Date.now().toString(),
        fullName: userToStore.fullName,
        email: userToStore.email,
        password: userToStore.password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    }
  },

  login: (email, password) => {
    try {
      const users = authService.getRegisteredUsers();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const { password: _, ...userWithoutPassword } = user;
        const authToken = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        localStorage.setItem(AUTH_TOKEN_KEY, authToken);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userWithoutPassword));
        
        return { success: true, user: userWithoutPassword, token: authToken };
      }

      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  },

  logout: () => {
    try {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_DATA_KEY);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  },

  isAuthenticated: () => {
    try {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const userData = localStorage.getItem(USER_DATA_KEY);
      return !!(token && userData);
    } catch (error) {
      console.error('Auth check error:', error);
      return false;
    }
  },

  getCurrentUser: () => {
    try {
      const userData = localStorage.getItem(USER_DATA_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  },

  getAuthToken: () => {
    try {
      return localStorage.getItem(AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Get token error:', error);
      return null;
    }
  },

  getRegisteredUsers: () => {
    try {
      const users = localStorage.getItem(USERS_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Get users error:', error);
      return [];
    }
  },

  changePassword: (currentPassword, newPassword) => {
    try {
      const users = authService.getRegisteredUsers();
      const currentUser = authService.getCurrentUser();

      if (!currentUser) {
        return { success: false, error: 'User not logged in' };
      }

      const userIndex = users.findIndex((u) => u.id === currentUser.id);
      if (userIndex === -1) {
        return { success: false, error: 'User record not found' };
      }

      const userRecord = users[userIndex];

      if (userRecord.password !== currentPassword) {
        return { success: false, error: 'Current password is incorrect' };
      }

      userRecord.password = newPassword;

      localStorage.setItem('registeredUsers', JSON.stringify(users));

      return { success: true, message: 'Password updated successfully' };
    } catch (error) {
      console.error('Password change error:', error);
      return { success: false, error: error.message };
    }
  },

  deleteAccount: (password) => {
  try {
      const users = authService.getRegisteredUsers();
      const currentUser = authService.getCurrentUser();

      if (!currentUser) {
        return { success: false, error: 'User not logged in' };
      }

      const userIndex = users.findIndex((u) => u.id === currentUser.id);

      if (userIndex === -1) {
        return { success: false, error: 'User record not found' };
      }

      const userRecord = users[userIndex];

      if (userRecord.password !== password) {
        return { success: false, error: 'Incorrect password' };
      }

      users.splice(userIndex, 1);
      localStorage.setItem('registeredUsers', JSON.stringify(users));

      authService.logout();

      return { success: true };
    } catch (error) {
      console.error('Delete account error:', error);
      return { success: false, error: error.message };
    }
  },
};

