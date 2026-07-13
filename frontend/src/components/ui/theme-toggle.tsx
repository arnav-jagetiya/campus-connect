import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

/**
 * An accessible theme toggle dropdown supporting Light, Dark, and System modes.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle accessibility keys: Escape to close
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectTheme = (value: typeof theme) => {
    setTheme(value);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" aria-hidden="true" />;
      case 'dark':
        return <Moon className="w-4 h-4" aria-hidden="true" />;
      default:
        return <Monitor className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        ref={triggerRef}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Change theme (current: ${theme})`}
        className="flex items-center justify-center w-9 h-9 border border-border hover:border-border-subtle rounded-md hover:bg-hover text-text transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg cursor-pointer"
      >
        {getIcon()}
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-md shadow-lg z-dropdown py-1 focus:outline-hidden"
        >
          <button
            role="menuitem"
            onClick={() => selectTheme('light')}
            className={`flex items-center gap-2 w-full px-3 py-2 text-left text-body hover:bg-hover text-text cursor-pointer transition-colors ${
              theme === 'light' ? 'font-medium bg-secondary/50' : ''
            }`}
          >
            <Sun className="w-4 h-4" aria-hidden="true" />
            <span>Light</span>
          </button>
          <button
            role="menuitem"
            onClick={() => selectTheme('dark')}
            className={`flex items-center gap-2 w-full px-3 py-2 text-left text-body hover:bg-hover text-text cursor-pointer transition-colors ${
              theme === 'dark' ? 'font-medium bg-secondary/50' : ''
            }`}
          >
            <Moon className="w-4 h-4" aria-hidden="true" />
            <span>Dark</span>
          </button>
          <button
            role="menuitem"
            onClick={() => selectTheme('system')}
            className={`flex items-center gap-2 w-full px-3 py-2 text-left text-body hover:bg-hover text-text cursor-pointer transition-colors ${
              theme === 'system' ? 'font-medium bg-secondary/50' : ''
            }`}
          >
            <Monitor className="w-4 h-4" aria-hidden="true" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
}
