import * as React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Bell, Search, Sparkles, LogOut, Settings, User } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/use-auth';

export const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Dynamically resolve breadcrumb tree from URL segment paths
  const breadcrumbs = React.useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const list = [{ name: 'Home', href: '/' }];

    let currentHref = '';
    segments.forEach((segment) => {
      currentHref += `/${segment}`;
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      list.push({ name, href: currentHref });
    });

    return list;
  }, [location.pathname]);

  const isMac =
    typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const handleSignOut = () => {
    logout();
    navigate('/auth/login');
  };

  const userInitials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <header className="sticky top-0 z-header flex items-center justify-between h-14 px-6 bg-surface border-b border-border transition-colors duration-normal shrink-0">
      {/* Breadcrumb Trail navigation */}
      <nav aria-label="Breadcrumb" className="hidden sm:block">
        <ol className="flex items-center gap-1.5 text-small text-text-secondary">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <span className="text-text-muted" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="font-semibold text-text" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link to={crumb.href} className="hover:text-text transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Spacer to justify-end on mobile header */}
      <div className="sm:hidden flex-1" />

      {/* Core action controls */}
      <div className="flex items-center gap-4">
        {/* Command Palette Trigger UI */}
        <button
          type="button"
          aria-label="Search"
          className="flex items-center justify-between gap-3 w-64 px-3 py-1.5 border border-border hover:border-border-subtle bg-bg/50 hover:bg-hover rounded-md text-small text-text-muted hover:text-text-secondary cursor-pointer transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Search or type a command...</span>
          </div>
          <kbd className="inline-flex items-center h-4.5 px-1.5 bg-secondary text-[10px] font-mono text-text-secondary border border-border rounded-sm shrink-0 select-none">
            {isMac ? '⌘K' : 'Ctrl+K'}
          </kbd>
        </button>

        {/* Theme Selector (Light / Dark / System Dropdown) */}
        <ThemeToggle />

        {/* Notifications Trigger */}
        <DropdownMenu
          align="right"
          className="w-72"
          trigger={
            <button
              type="button"
              aria-label="Notifications"
              className="flex items-center justify-center w-9 h-9 border border-border hover:border-border-subtle rounded-md hover:bg-hover text-text transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring cursor-pointer"
            >
              <Bell className="w-4 h-4" />
            </button>
          }
        >
          <div className="p-6 text-center space-y-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <p className="text-small font-semibold text-text">You're all caught up.</p>
              <p className="text-caption text-text-muted">
                No new updates or alerts at the moment.
              </p>
            </div>
          </div>
        </DropdownMenu>

        {/* User Account Options */}
        <DropdownMenu
          align="right"
          trigger={
            <button
              aria-label="User menu"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/15 text-primary text-caption font-semibold cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all focus:outline-hidden focus:ring-2 focus:ring-ring"
            >
              {userInitials}
            </button>
          }
        >
          <div className="px-3 py-2 border-b border-border-subtle">
            <p className="text-small font-semibold text-text">{user?.fullName}</p>
            <p className="text-caption text-text-muted">{user?.email}</p>
          </div>
          <DropdownMenuItem
            icon={<User className="w-4 h-4" />}
            onClick={() => navigate('/settings')}
          >
            My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            icon={<Settings className="w-4 h-4" />}
            onClick={() => navigate('/settings')}
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            icon={<LogOut className="w-4 h-4" />}
            onClick={handleSignOut}
            className="text-danger hover:bg-danger/10 hover:text-danger"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    </header>
  );
};
