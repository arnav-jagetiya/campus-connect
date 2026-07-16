import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from '@/features/dashboard/components/Sidebar';
import { TopNav } from '@/features/dashboard/components/TopNav';
import { MobileBottomNav } from '@/features/dashboard/components/MobileBottomNav';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'campus-connect-sidebar-collapsed';

export const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        return stored === 'true';
      }
      return window.innerWidth < 1024;
    }
    return false;
  });

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return (
    <div className="min-h-dvh bg-bg text-text font-sans antialiased transition-colors duration-normal">
      {/* Sidebar navigation for desktop/tablet sizes */}
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />

      {/* Primary content area container offset by the sidebar size */}
      <div
        className={cn(
          'flex flex-col min-h-dvh transition-[padding] duration-normal ease-default',
          isCollapsed ? 'md:pl-16' : 'md:pl-60'
        )}
      >
        {/* Desktop TopNav Header */}
        <div className="hidden md:block">
          <TopNav />
        </div>

        {/* Mobile Header */}
        <header className="sticky top-0 z-header md:hidden flex items-center justify-between h-14 px-4 bg-surface border-b border-border transition-colors duration-normal shrink-0">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
              <GraduationCap className="w-4.5 h-4.5" />
            </div>
            <span className="text-body-lg font-bold tracking-tight text-primary">
              Campus Connect
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        {/* Scrollable Viewport and Main Landmarker */}
        <main className="flex-1 p-4 sm:p-6 pb-20 md:pb-6 overflow-y-auto">
          <div className="max-w-container-xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

        {/* Mobile Navigation bar */}
        <MobileBottomNav />
      </div>
    </div>
  );
};
