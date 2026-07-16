import { NavLink } from 'react-router-dom';
import { Home, Brain, MessageSquare, Bot, Settings } from 'lucide-react';
import { cn } from '@/lib/cn';

export const MobileBottomNav = () => {
  const items = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Wellness', href: '/wellness', icon: Brain },
    { name: 'Community', href: '/community', icon: MessageSquare },
    { name: 'Assistant', href: '/ai-assistant', icon: Bot },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-mobile-nav md:hidden flex items-center justify-around h-14 bg-surface border-t border-border px-2 pb-[safe-area-inset-bottom] transition-colors duration-normal"
      aria-label="Mobile navigation"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 flex-1 py-1 rounded-md transition-colors cursor-pointer text-center',
                isActive ? 'text-primary font-medium' : 'text-text-muted hover:text-text'
              )
            }
          >
            <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="text-[10px] tracking-tight truncate">{item.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
