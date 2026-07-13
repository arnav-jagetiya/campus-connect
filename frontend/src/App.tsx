import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AppRoutes } from '@/routes/AppRoutes';

const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </QueryProvider>
  );
};

export default App;
