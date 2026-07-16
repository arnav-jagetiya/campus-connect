import * as React from 'react';
import { cn } from '@/lib/cn';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size variant affecting height and padding. */
  inputSize?: InputSize;
  /** Optional icon to render inside the input at the left. */
  leftIcon?: React.ReactNode;
  /** Optional icon to render inside the input at the right. */
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'h-8 text-small rounded-md',
  md: 'h-9 text-body rounded-md',
  lg: 'h-10 text-body-lg rounded-md',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputSize = 'md', leftIcon, rightIcon, type = 'text', disabled, ...props },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-text-muted pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            'w-full bg-surface border border-border text-text placeholder:text-text-muted transition-colors',
            'hover:border-primary/50',
            'focus:outline-hidden focus:ring-2 focus:ring-ring focus:border-primary',
            'disabled:bg-disabled disabled:text-disabled-foreground disabled:cursor-not-allowed disabled:opacity-60',
            'aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/20 aria-[invalid=true]:focus:border-danger',
            sizeStyles[inputSize],
            leftIcon ? 'pl-9' : 'pl-3',
            rightIcon ? 'pr-9' : 'pr-3',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-text-muted pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
