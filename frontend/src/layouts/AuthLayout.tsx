import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export const AuthLayout = () => {
  return (
    <div className="relative flex flex-col min-h-dvh bg-bg text-text font-sans antialiased overflow-x-hidden transition-colors duration-normal">
      {/* Self-contained keyframes for the card entrance animation */}
      <style>{`
        @keyframes authCardEntrance {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-auth-card {
          animation: authCardEntrance 400ms cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Signature Visual Identity: CSS-only Background Gradients and Layered Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Radial Gradients */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,var(--color-primary),transparent_60%)] opacity-[0.06] dark:opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_bottom_left,var(--color-primary),transparent_60%)] opacity-[0.03] dark:opacity-[0.05]" />

        {/* Layered Circles */}
        <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[15%] left-[10%] w-96 h-96 rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl" />

        {/* Layered Rounded Rectangles */}
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[150px] -rotate-12 rounded-2xl bg-secondary/30 dark:bg-secondary/5 blur-2xl" />
        <div className="absolute bottom-[35%] right-[25%] w-[250px] h-[250px] rotate-45 rounded-3xl bg-primary/5 dark:bg-primary/5 blur-3xl" />
      </div>

      {/* Theme Selector Dropdown */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main Content Centered Container */}
      <main className="relative flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md animate-auth-card">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
