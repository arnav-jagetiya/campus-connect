import { useThemeContext, type Theme } from '@/providers/ThemeProvider';

export interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Custom hook to access and manage the application's color theme.
 */
export function useTheme(): UseThemeReturn {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useThemeContext();
  return { theme, resolvedTheme, setTheme, toggleTheme };
}
