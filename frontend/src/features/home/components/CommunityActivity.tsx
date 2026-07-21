import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, BookOpen, Calendar, Star, ArrowRight } from 'lucide-react';

const activities = [
  {
    Icon: MessageSquare,
    iconStyle: 'bg-primary/10 text-primary',
    description: 'Sarah posted in CS 301 Study Group',
    time: '2h ago',
  },
  {
    Icon: Users,
    iconStyle: 'bg-success/10 text-success',
    description: 'Photography Club added 3 new members',
    time: '4h ago',
  },
  {
    Icon: BookOpen,
    iconStyle: 'bg-info/10 text-info',
    description: 'Prof. Martinez shared new course materials',
    time: '6h ago',
  },
  {
    Icon: Calendar,
    iconStyle: 'bg-warning/10 text-warning',
    description: 'Debate Society scheduled a practice session',
    time: '8h ago',
  },
  {
    Icon: Star,
    iconStyle: 'bg-primary/10 text-primary',
    description: 'Campus newsletter published: Week 12 Highlights',
    time: '1d ago',
  },
];

export const CommunityActivity = () => {
  return (
    <section aria-labelledby="community-activity-title">
      <Card className="hover:shadow-md transition-shadow duration-fast">
        <CardHeader>
          <CardTitle id="community-activity-title">Community Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0">
          {activities.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.description}
                className={`flex items-center gap-3 py-3 ${idx < activities.length - 1 ? 'border-b border-border-subtle' : ''}`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${item.iconStyle}`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-small text-text truncate">{item.description}</p>
                </div>
                <span className="text-caption text-text-muted shrink-0">{item.time}</span>
              </div>
            );
          })}
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All Activity
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
