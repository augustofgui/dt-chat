import React, { createContext, useState, useEffect } from 'react';

import { SignInData, User } from '@interfaces/auth-interface';

import { api } from '@services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoadingUserData: boolean;
  signIn: (signInCredentials: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);
  const [isLoadingUserData, setIsLoadingUserData] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    async function loadData() {
      try {
        const token = await AsyncStorage.getItem('@dt-chat:token');

        if(token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const { data } = await api.get('/session/me');
          const { user: userData } = data;

          setUser(userData);
        }
      } finally {
        setIsLoadingUserData(false);
      }
    }

    loadData();
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { data } = await api.post('/session/authenticate', {
      email,
      password,
    });

    const { token, user: userData } = data;

    await AsyncStorage.setItem('@dt-chat:token', token);

    setUser(userData);
  }

  async function signOut() {
    await AsyncStorage.removeItem('@dt-chat:token');

    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingUserData,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}
