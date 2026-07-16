import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { useLocation } from 'react-router-dom';

export const PlaceholderView = () => {
  const location = useLocation();

  // Dynamically resolve navigation info from global config
  const navItem = React.useMemo(() => {
    for (const group of navigationConfig) {
      const match = group.items.find((item) => item.href === location.pathname);
      if (match) return match;
    }
    return null;
  }, [location.pathname]);

  const name = navItem?.name || 'Page';
  const Icon = navItem?.icon || Sparkles;

  const getDescriptionText = () => {
    switch (name) {
      case 'Wellness':
        return 'The upcoming Wellness feature will deliver stress metrics, mental health check-ins, mindful exercises, and customized feedback to support student health and focus.';
      case 'Community':
        return 'The upcoming Community feature will provide campus discussion boards, study-group matching, and direct messaging channels to foster student networking and support.';
      case 'Events':
        return 'The upcoming Events calendar will serve as your primary coordination hub for campus activities, RSVPs, club meetings, and campus-wide notifications.';
      case 'Resources':
        return 'The upcoming Resources center will house university files, academic templates, links to administration services, and tutor-scheduling facilities.';
      case 'AI Assistant':
        return 'The upcoming AI Assistant will offer intelligent virtual agent assistance for grading outlines, library catalog queries, and scheduling suggestions.';
      case 'Settings':
        return 'Configure your account details, notification channels, integration services, and profile privacy preferences in this panel.';
      default:
        return 'This section is currently under development. A fully integrated interface designed with rich utilities is coming soon.';
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto py-12">
      <Card className="border border-border shadow-sm p-4 text-center">
        <CardHeader className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-h2 font-bold tracking-tight text-text">{name}</CardTitle>
          <CardDescription className="text-body text-text-secondary mt-1">
            Coming Soon to Campus Connect
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-body text-text-secondary leading-relaxed">{getDescriptionText()}</p>
          <div className="pt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-caption text-secondary-foreground font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Feature Milestone Planned</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
