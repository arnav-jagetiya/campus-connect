import { Home, Brain, MessageSquare, Calendar, BookOpen, Bot, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationGroup {
  groupName: string;
  items: NavigationItem[];
}

export const navigationConfig: NavigationGroup[] = [
  {
    groupName: 'Menu',
    items: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Wellness', href: '/wellness', icon: Brain },
      { name: 'Community', href: '/community', icon: MessageSquare },
      { name: 'Events', href: '/events', icon: Calendar },
      { name: 'Resources', href: '/resources', icon: BookOpen },
      { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
    ],
  },
  {
    groupName: 'System',
    items: [{ name: 'Settings', href: '/settings', icon: Settings }],
  },
];
