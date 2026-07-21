import { Sun, Moon, Sunset } from 'lucide-react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: 'Good morning', Icon: Sun };
  if (hour >= 12 && hour < 18) return { text: 'Good afternoon', Icon: Sunset };
  return { text: 'Good evening', Icon: Moon };
};

const getFormattedDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const WelcomeHero = () => {
  const { text: greeting, Icon: TimeIcon } = getGreeting();

  return (
    <section className="space-y-1">
      <div className="flex items-center gap-3">
        <TimeIcon className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
        <h1 className="text-h1 font-bold text-text tracking-tight">{greeting}, Arnav</h1>
      </div>
      <p className="text-body-lg text-text-secondary pl-9">
        Here's what's happening across your campus today.
      </p>
      <p className="text-small text-text-muted pl-9">{getFormattedDate()}</p>
    </section>
  );
};
