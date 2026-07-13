import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';

/**
 * Global AppLayout shell, providing header, footer, responsive layouts,
 * and layout semantic landmarks.
 */
export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text font-sans antialiased transition-colors duration-normal">
      {/* Header Landmark */}
      <header className="sticky top-0 z-sticky bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-h3 font-bold tracking-tight text-primary">Campus Connect</span>
          <span className="bg-secondary text-secondary-foreground text-caption px-2 py-0.5 rounded-sm font-medium">
            Foundation
          </span>
        </div>

        {/* Navigation / Header Actions */}
        <div className="flex items-center gap-4">
          <nav
            className="text-small text-text-secondary hidden sm:block"
            aria-label="System status"
          >
            Status: <span className="text-success font-semibold">Active</span>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content Landmark */}
      <main className="flex-1 p-6">
        <div className="max-w-container-xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer Landmark */}
      <footer className="bg-surface border-t border-border py-4 px-6 text-center text-caption text-text-secondary">
        <div className="max-w-container-xl mx-auto w-full">
          &copy; {new Date().getFullYear()} Campus Connect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
