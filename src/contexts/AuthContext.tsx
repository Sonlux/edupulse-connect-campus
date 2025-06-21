
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'student' | 'faculty' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  studentId?: string;
  facultyId?: string;
  adminId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('eduPulseUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock authentication - replace with actual API call
      let mockUser: User;
      
      if (email === 'student@example.com') {
        mockUser = {
          id: '1',
          name: 'Alex Johnson',
          email: 'student@example.com',
          role: 'student',
          studentId: 'CS21B1045'
        };
      } else if (email === 'faculty@example.com') {
        mockUser = {
          id: '2',
          name: 'Dr. Sarah Smith',
          email: 'faculty@example.com',
          role: 'faculty',
          facultyId: 'FAC001'
        };
      } else if (email === 'admin@example.com') {
        mockUser = {
          id: '3',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'admin',
          adminId: 'ADM001'
        };
      } else {
        throw new Error('Invalid credentials');
      }

      setUser(mockUser);
      localStorage.setItem('eduPulseUser', JSON.stringify(mockUser));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduPulseUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
