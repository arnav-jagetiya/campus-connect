import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap, LogOut, Settings, User } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navigationConfig } from '@/config/navigation';
import { Tooltip } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';

import { useAuth } from '@/hooks/use-auth';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <aside
      className={cn(
        'fixed top-0 bottom-0 left-0 z-sidebar flex flex-col bg-surface border-r border-border h-full transition-[width,transform] duration-normal ease-default hidden md:flex',
        isCollapsed ? 'w-16' : 'w-60'
      )}
    >
      {/* Sidebar Brand Header */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-border-subtle shrink-0">
        <Link to="/" className="flex items-center gap-2.5 overflow-hidden">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary shrink-0">
            <GraduationCap className="w-4.5 h-4.5" />
          </div>
          {!isCollapsed && (
            <span className="text-body-lg font-bold tracking-tight text-primary whitespace-nowrap animate-in fade-in">
              Campus Connect
            </span>
          )}
        </Link>
        {!isCollapsed && (
          <button
            onClick={onToggle}
            aria-label="Collapse sidebar"
            className="flex items-center justify-center w-6 h-6 rounded-sm text-text-secondary hover:bg-hover hover:text-text cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6" aria-label="Primary navigation">
        {navigationConfig.map((group) => (
          <div key={group.groupName} className="space-y-1.5">
            {!isCollapsed ? (
              <h3 className="px-3 text-overline font-semibold tracking-widest text-text-muted uppercase">
                {group.groupName}
              </h3>
            ) : (
              <div className="h-px bg-border-subtle my-2" />
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const linkContent = (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 px-3 py-2 rounded-md text-body transition-colors cursor-pointer w-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                        isActive
                          ? 'bg-secondary text-primary font-medium'
                          : 'text-text-secondary hover:bg-hover hover:text-text'
                      )
                    }
                  >
                    <Icon className="w-4.5 h-4.5 shrink-0" aria-hidden="true" />
                    {!isCollapsed && (
                      <span className="whitespace-nowrap animate-in fade-in">{item.name}</span>
                    )}
                  </NavLink>
                );

                return isCollapsed ? (
                  <Tooltip key={item.name} content={item.name} delay={300}>
                    {linkContent}
                  </Tooltip>
                ) : (
                  <div key={item.name}>{linkContent}</div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Expand Toggle Button (when collapsed) */}
      {isCollapsed && (
        <div className="p-3 border-t border-border-subtle flex justify-center shrink-0">
          <button
            onClick={onToggle}
            aria-label="Expand sidebar"
            className="flex items-center justify-center w-8 h-8 rounded-md text-text-secondary hover:bg-hover hover:text-text cursor-pointer transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Pinned User Details & Profile Actions */}
      <div className="p-3 border-t border-border-subtle shrink-0">
        <DropdownMenu
          align={isCollapsed ? 'left' : 'right'}
          className="bottom-full mb-2 left-0 right-auto"
          trigger={
            <button
              aria-label="User account menu"
              className={cn(
                'flex items-center gap-3 w-full p-2 rounded-md hover:bg-hover cursor-pointer transition-colors text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring',
                isCollapsed ? 'justify-center' : ''
              )}
            >
              <div className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center text-caption font-semibold shrink-0">
                {user?.fullName
                  ? user.fullName
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)
                  : 'U'}
              </div>
              {!isCollapsed && (
                <div className="overflow-hidden flex-1 animate-in fade-in">
                  <p className="text-small font-medium text-text truncate">{user?.fullName}</p>
                  <p className="text-caption text-text-muted truncate">{user?.email}</p>
                </div>
              )}
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
    </aside>
  );
};
