import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import { HomeView } from '@/features/home/components/HomeView';
import { NotFoundView } from '@/features/errors/components/NotFoundView';

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
        path: '*',
        element: <NotFoundView />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
