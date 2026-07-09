import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-6">
        The page you are looking for doesn't exist or has been moved to a different URL.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-xs text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Go back home
      </Link>
    </div>
  );
};
