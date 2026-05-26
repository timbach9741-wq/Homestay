import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 임시 유저 타입 (추후 Firebase User로 대체)
export interface User {
  uid: string;
  email: string;
  role: 'partner' | 'admin' | 'user';
  membershipTier: 'free' | 'premium';
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  register: (email: string) => void;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 로컬스토리지에서 유저 정보 불러오기 (임시 Mock)
  useEffect(() => {
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string) => {
    // 가상의 로그인 처리 (비밀번호 검증 등 생략)
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      const mockUser: User = { uid: 'mock-uid-123', email, role: 'partner', membershipTier: 'free' };
      setUser(mockUser);
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
    }
  };

  const register = (email: string) => {
    const mockUser: User = { uid: 'mock-uid-' + Date.now(), email, role: 'partner', membershipTier: 'free' };
    setUser(mockUser);
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  const upgradeToPremium = () => {
    if (user) {
      const upgradedUser = { ...user, membershipTier: 'premium' as const };
      setUser(upgradedUser);
      localStorage.setItem('mockUser', JSON.stringify(upgradedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, upgradeToPremium }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
