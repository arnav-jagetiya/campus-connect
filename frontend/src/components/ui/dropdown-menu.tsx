import * as React from 'react';
import { cn } from '@/lib/cn';

interface DropdownMenuProps {
  /** The element that opens the dropdown when clicked. */
  trigger: React.ReactNode;
  /** Alignment of the dropdown panel. */
  align?: 'left' | 'right';
  /** Dropdown menu items. */
  children: React.ReactNode;
  /** Custom classes for the dropdown container panel. */
  className?: string;
}

export const DropdownMenu = ({
  trigger,
  align = 'right',
  children,
  className,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle accessibility keys: Escape to close
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const triggerElement = React.isValidElement(trigger)
    ? React.cloneElement(
        trigger as React.ReactElement<{
          onClick?: (e: React.MouseEvent) => void;
          'aria-haspopup'?: string;
          'aria-expanded'?: boolean;
        }>,
        {
          onClick: (e: React.MouseEvent) => {
            toggleDropdown();
            const triggerProps = (trigger.props || {}) as {
              onClick?: (e: React.MouseEvent) => void;
            };
            if (triggerProps.onClick) triggerProps.onClick(e);
          },
          'aria-haspopup': 'true',
          'aria-expanded': isOpen,
        }
      )
    : trigger;

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {triggerElement}

      {isOpen && (
        <div
          role="menu"
          aria-label="Options"
          className={cn(
            'absolute mt-2 w-56 bg-card border border-border rounded-md shadow-lg z-dropdown py-1 focus:outline-hidden transition-opacity duration-fast ease-out',
            align === 'right' ? 'right-0' : 'left-0',
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional icon suffix or prefix. */
  icon?: React.ReactNode;
  /** Label content. */
  children: React.ReactNode;
}

export const DropdownMenuItem = ({
  icon,
  children,
  className,
  ...props
}: DropdownMenuItemProps) => {
  return (
    <button
      role="menuitem"
      className={cn(
        'flex items-center gap-2 w-full px-3 py-2 text-left text-body hover:bg-hover text-text cursor-pointer transition-colors focus-visible:outline-hidden focus-visible:bg-hover disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {icon && (
        <span className="w-4 h-4 shrink-0 text-text-secondary" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};
