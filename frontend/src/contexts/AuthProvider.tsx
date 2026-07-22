import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { authApi, getRefreshToken, clearTokens } from '@/services/auth.service';
import { AuthContext } from './AuthContext';
import type { AuthState } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        setState({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      try {
        await authApi.refresh();
        const user = await authApi.me();
        setState({ user, isAuthenticated: true, isLoading: false });
      } catch {
        clearTokens();
        setState({ user: null, isAuthenticated: false, isLoading: false });
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { user } = await authApi.login(email, password);
      setState({ user, isAuthenticated: true, isLoading: false });
    } catch (err) {
      setState({ user: null, isAuthenticated: false, isLoading: false });
      throw err;
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { user } = await authApi.register(fullName, email, password);
      setState({ user, isAuthenticated: true, isLoading: false });
    } catch (err) {
      setState({ user: null, isAuthenticated: false, isLoading: false });
      throw err;
    }
  };

  const logout = () => {
    authApi.logout();
    setState({ user: null, isAuthenticated: false, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
