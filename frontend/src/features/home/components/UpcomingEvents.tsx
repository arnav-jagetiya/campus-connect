import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const events = [
  {
    title: 'CS 301 — Data Structures Review Session',
    date: 'Tomorrow, 10:00 AM',
    location: 'Room 204, Engineering Hall',
    category: 'Academic',
    categoryStyle: 'bg-primary/10 text-primary',
    highlight: true,
  },
  {
    title: 'Campus Wellness Walk',
    date: 'Jul 20, 8:00 AM',
    location: 'University Gardens',
    category: 'Health',
    categoryStyle: 'bg-success/10 text-success',
    highlight: false,
  },
  {
    title: 'Founders Club Pitch Night',
    date: 'Jul 22, 6:30 PM',
    location: 'Innovation Center',
    category: 'Social',
    categoryStyle: 'bg-warning/10 text-warning',
    highlight: false,
  },
  {
    title: 'Library Extended Hours Begin',
    date: 'Jul 25, 12:00 PM',
    location: 'Main Library',
    category: 'Info',
    categoryStyle: 'bg-info/10 text-info',
    highlight: false,
  },
];

export const UpcomingEvents = () => {
  return (
    <section aria-labelledby="upcoming-events-title">
      <Card className="hover:shadow-md transition-shadow duration-fast">
        <CardHeader>
          <CardTitle id="upcoming-events-title">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0">
          {events.map((event, idx) => (
            <div
              key={event.title}
              className={cn(
                'flex gap-4 py-4',
                idx < events.length - 1 && 'border-b border-border-subtle'
              )}
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center pt-1">
                <div
                  className={cn(
                    'w-2.5 h-2.5 rounded-full shrink-0',
                    event.highlight ? 'bg-primary' : 'bg-border'
                  )}
                />
                {idx < events.length - 1 && <div className="w-px flex-1 bg-border-subtle mt-1" />}
              </div>

              {/* Event content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-small font-medium text-text">{event.title}</p>
                  <span
                    className={cn(
                      'text-caption font-semibold px-2 py-0.5 rounded-sm shrink-0',
                      event.categoryStyle
                    )}
                  >
                    {event.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-caption text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All Events
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
