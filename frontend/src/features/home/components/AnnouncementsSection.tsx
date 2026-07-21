import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle, GraduationCap, Info } from 'lucide-react';
import { cn } from '@/lib/cn';

const announcements = [
  {
    Icon: AlertCircle,
    iconColor: 'text-danger',
    title: 'Fall 2026 tuition payment deadline: August 1',
    time: '2 days left',
    urgent: true,
  },
  {
    Icon: GraduationCap,
    iconColor: 'text-text-secondary',
    title: 'Course registration for Fall 2026 opens July 28',
    time: 'In 10 days',
    urgent: false,
  },
  {
    Icon: Info,
    iconColor: 'text-info',
    title: 'Library summer hours: Mon–Fri 8 AM – 10 PM',
    time: 'Ongoing',
    urgent: false,
  },
];

export const AnnouncementsSection = () => {
  return (
    <section aria-labelledby="announcements-title">
      <Card className="hover:shadow-md transition-shadow duration-fast">
        <CardHeader>
          <CardTitle id="announcements-title">Announcements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0">
          {announcements.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.title}
                className={cn(
                  'flex items-start gap-3 py-3',
                  idx < announcements.length - 1 && 'border-b border-border-subtle'
                )}
              >
                <Icon
                  className={cn('w-5 h-5 shrink-0 mt-0.5', item.iconColor)}
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-small font-medium text-text">{item.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {item.urgent && (
                      <span className="w-2 h-2 rounded-full bg-danger animate-pulse shrink-0" />
                    )}
                    <span className="text-caption text-text-muted">{item.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
