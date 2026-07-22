import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/contexts/AuthProvider';
import { AppRoutes } from '@/routes/AppRoutes';

const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};

export default App;
