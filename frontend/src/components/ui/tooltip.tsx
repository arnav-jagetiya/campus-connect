import * as React from 'react';
import { cn } from '@/lib/cn';

interface TooltipProps {
  /** Text or element inside the tooltip popup. */
  content: React.ReactNode;
  /** Active element triggering the tooltip. */
  children: React.ReactNode;
  /** Additional styling classes. */
  className?: string;
  /** Hover delay in milliseconds. Default: 300 */
  delay?: number;
}

export const Tooltip = ({ content, children, className, delay = 300 }: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1.5 text-caption bg-text text-bg rounded-sm shadow-md whitespace-nowrap z-tooltip pointer-events-none transition-opacity duration-fast ease-out',
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
