import { Link } from 'react-router-dom';

/**
 * 404 Not Found View using the project's design token system.
 */
export const NotFoundView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-[5rem] font-extrabold text-text tracking-tight leading-none">404</h1>
      <h2 className="text-h2 font-semibold text-text-secondary mt-4 mb-2 tracking-tight">
        Page Not Found
      </h2>
      <p className="text-body text-text-muted max-w-container-xs mb-6">
        The page you are looking for doesn't exist or has been moved to a different URL.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-color-primary-hover text-primary-foreground text-body font-medium rounded-md shadow-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
      >
        Go back home
      </Link>
    </div>
  );
};
