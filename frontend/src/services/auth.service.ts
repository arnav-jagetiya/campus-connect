/**
 * Authentication service — API calls and in-memory token management.
 *
 * The access token is stored ONLY in module-level memory (never localStorage).
 * The refresh token is stored in localStorage for session persistence.
 */

import api from '@/config/axios';

// ─── Types ───────────────────────────────────────────────────────────

export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface TokenResponse {
  accessToken: string;
}

export interface ApiFieldErrors {
  [field: string]: string;
}

export interface ApiErrorBody {
  status: number;
  error: string;
  message: string;
  fieldErrors?: ApiFieldErrors;
  timestamp: string;
}

// ─── In-Memory Token Store ───────────────────────────────────────────

let accessToken: string | null = null;

const REFRESH_TOKEN_KEY = 'campus-connect-refresh-token';

export const getAccessToken = (): string | null => accessToken;

export const setAccessToken = (token: string | null): void => {
  accessToken = token;
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

const setRefreshToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
};

export const clearTokens = (): void => {
  accessToken = null;
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// ─── API Calls ───────────────────────────────────────────────────────

export const authApi = {
  async register(fullName: string, email: string, password: string): Promise<{ user: User }> {
    const { data } = await api.post<AuthResponse>('/v1/auth/register', {
      fullName,
      email,
      password,
    });
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    return { user: data.user };
  },

  async login(email: string, password: string): Promise<{ user: User }> {
    const { data } = await api.post<AuthResponse>('/v1/auth/login', {
      email,
      password,
    });
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    return { user: data.user };
  },

  async refresh(): Promise<string> {
    const refreshToken = getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token');

    const { data } = await api.post<TokenResponse>('/v1/auth/refresh', {
      refreshToken,
    });
    setAccessToken(data.accessToken);
    return data.accessToken;
  },

  async me(): Promise<User> {
    const { data } = await api.get<User>('/v1/users/me');
    return data;
  },

  logout(): void {
    clearTokens();
  },
};
