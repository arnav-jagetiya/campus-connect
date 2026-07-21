import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Activity, Clock, Heart } from 'lucide-react';

const indicators = [
  {
    label: 'Current Mood',
    value: 'Feeling Good',
    Icon: Smile,
    badgeStyle: 'bg-success/10 text-success',
  },
  {
    label: 'Stress Level',
    value: 'Moderate',
    Icon: Activity,
    badgeStyle: 'bg-warning/10 text-warning',
  },
  {
    label: 'Last Check-in',
    value: '3 days ago',
    Icon: Clock,
    badgeStyle: '',
  },
];

export const WellnessSummary = () => {
  return (
    <section aria-labelledby="wellness-summary-title">
      <Card className="hover:shadow-md transition-shadow duration-fast">
        <CardHeader>
          <CardTitle id="wellness-summary-title">Wellness Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0">
          {indicators.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 py-3 ${idx < indicators.length - 1 ? 'border-b border-border-subtle' : ''}`}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary shrink-0">
                  <Icon className="w-4 h-4 text-text-secondary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-caption text-text-muted">{item.label}</p>
                  {item.badgeStyle ? (
                    <span
                      className={`inline-block text-caption font-semibold px-2 py-0.5 rounded-sm mt-0.5 ${item.badgeStyle}`}
                    >
                      {item.value}
                    </span>
                  ) : (
                    <p className="text-small font-medium text-text-secondary">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
          <div className="pt-4">
            <Button variant="primary" size="md" fullWidth leftIcon={<Heart className="w-4 h-4" />}>
              Start Check-in
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
