import { QueryProvider } from '@/providers/QueryProvider';
import { AppRoutes } from '@/routes/AppRoutes';

const App = () => {
  return (
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  );
};

export default App;
