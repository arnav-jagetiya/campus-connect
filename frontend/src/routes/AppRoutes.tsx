import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { HomeView } from '@/features/home/components/HomeView';
import { NotFoundView } from '@/features/errors/components/NotFoundView';
import { LoginView } from '@/features/auth/components/LoginView';
import { RegisterView } from '@/features/auth/components/RegisterView';
import { ForgotPasswordView } from '@/features/auth/components/ForgotPasswordView';
import { PlaceholderView } from '@/features/dashboard/components/PlaceholderView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: 'wellness',
        element: <PlaceholderView />,
      },
      {
        path: 'community',
        element: <PlaceholderView />,
      },
      {
        path: 'events',
        element: <PlaceholderView />,
      },
      {
        path: 'resources',
        element: <PlaceholderView />,
      },
      {
        path: 'ai-assistant',
        element: <PlaceholderView />,
      },
      {
        path: 'settings',
        element: <PlaceholderView />,
      },
      {
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginView />,
      },
      {
        path: 'register',
        element: <RegisterView />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordView />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
