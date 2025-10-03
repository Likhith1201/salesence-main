import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  joinDate: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('salesence_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsSignedIn(true);
    }
    // Removed auto-login - users must sign in manually
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        let mockUser: User;

        // Special admin credentials
        if (email === 'admin@admin.com' && password === 'admin') {
          mockUser = {
            id: 'admin',
            name: 'Administrator',
            email: 'admin@salesence.com',
            plan: 'Enterprise',
            joinDate: '2024-01-01',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=admin`
          };
        } else {
          // Default mock user for any other credentials
          mockUser = {
            id: '1',
            name: 'John Doe',
            email: email,
            plan: 'Professional',
            joinDate: '2024-01-15',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
          };
        }

        setUser(mockUser);
        setIsSignedIn(true);
        localStorage.setItem('salesence_user', JSON.stringify(mockUser));
        resolve(true);
      }, 1500);
    });
  };

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful sign up
        const mockUser: User = {
          id: Date.now().toString(),
          name: name,
          email: email,
          plan: 'Starter',
          joinDate: new Date().toISOString().split('T')[0],
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };

        setUser(mockUser);
        setIsSignedIn(true);
        localStorage.setItem('salesence_user', JSON.stringify(mockUser));
        resolve(true);
      }, 1500);
    });
  };

  const signOut = () => {
    setUser(null);
    setIsSignedIn(false);
    localStorage.removeItem('salesence_user');
  };

  const value: AuthContextType = {
    user,
    isSignedIn,
    signIn,
    signOut,
    signUp
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};