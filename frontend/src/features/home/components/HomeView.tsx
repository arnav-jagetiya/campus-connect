import { WelcomeHero } from './WelcomeHero';
import { QuickActions } from './QuickActions';
import { UpcomingEvents } from './UpcomingEvents';
import { WellnessSummary } from './WellnessSummary';
import { CommunityActivity } from './CommunityActivity';
import { AiAssistantSection } from './AiAssistantSection';
import { AnnouncementsSection } from './AnnouncementsSection';

export const HomeView = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-8">
      {/* Personalized Welcome */}
      <WelcomeHero />

      {/* Quick Action Cards */}
      <QuickActions />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column — Primary Content */}
        <div className="lg:col-span-2 space-y-6">
          <UpcomingEvents />
          <CommunityActivity />
        </div>

        {/* Right Column — Secondary Widgets */}
        <div className="space-y-6">
          <WellnessSummary />
          <AiAssistantSection />
          <AnnouncementsSection />
        </div>
      </div>
    </div>
  );
};
