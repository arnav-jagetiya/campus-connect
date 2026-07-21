import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Brain, Calendar, BookOpen, MessageSquare, Bot } from 'lucide-react';

const actions = [
  { name: 'Wellness', href: '/wellness', description: 'Track your wellbeing', icon: Brain },
  { name: 'Events', href: '/events', description: 'Campus calendar', icon: Calendar },
  { name: 'Resources', href: '/resources', description: 'Study materials', icon: BookOpen },
  {
    name: 'Community',
    href: '/community',
    description: 'Discussions & clubs',
    icon: MessageSquare,
  },
  { name: 'AI Assistant', href: '/ai-assistant', description: 'Get smart help', icon: Bot },
];

export const QuickActions = () => {
  return (
    <section aria-label="Quick actions">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.name} to={action.href} className="group">
              <Card className="flex flex-col items-center text-center p-4 gap-3 h-full hover:shadow-md hover:border-primary/20 transition-all duration-fast cursor-pointer group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-small font-medium text-text">{action.name}</p>
                  <p className="text-caption text-text-muted">{action.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
