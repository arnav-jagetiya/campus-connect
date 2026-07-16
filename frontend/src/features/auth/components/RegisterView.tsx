import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/forms/input';
import { PasswordInput } from '@/components/forms/password-input';
import { AuthCard } from './AuthCard';

export const RegisterView = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthCard title="Create your account" subtitle="Join your campus community today">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name field */}
        <div className="space-y-1.5">
          <label htmlFor="register-name" className="text-small font-medium text-text">
            Full Name
          </label>
          <Input
            id="register-name"
            type="text"
            placeholder="John Doe"
            inputSize="lg"
            required
            autoComplete="name"
          />
        </div>

        {/* Email field */}
        <div className="space-y-1.5">
          <label htmlFor="register-email" className="text-small font-medium text-text">
            Email address
          </label>
          <Input
            id="register-email"
            type="email"
            placeholder="name@university.edu"
            inputSize="lg"
            required
            autoComplete="email"
          />
        </div>

        {/* Password field */}
        <div className="space-y-1.5">
          <label htmlFor="register-password" className="text-small font-medium text-text">
            Password
          </label>
          <PasswordInput
            id="register-password"
            placeholder="••••••••"
            inputSize="lg"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Confirm Password field */}
        <div className="space-y-1.5">
          <label htmlFor="register-confirm-password" className="text-small font-medium text-text">
            Confirm Password
          </label>
          <PasswordInput
            id="register-confirm-password"
            placeholder="••••••••"
            inputSize="lg"
            required
            autoComplete="new-password"
          />
        </div>

        {/* Primary Submit Button */}
        <div className="pt-2">
          <Button type="submit" size="lg" fullWidth>
            Create Account
          </Button>
        </div>

        {/* Terms of Service and Privacy Policy Note */}
        <p className="text-center text-caption text-text-secondary leading-relaxed">
          By clicking Create Account, you agree to our{' '}
          <a href="#" className="underline hover:text-text transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-text transition-colors">
            Privacy Policy
          </a>
          .
        </p>

        {/* Section Divider */}
        <div className="relative flex items-center justify-center py-1">
          <div className="absolute inset-x-0 h-px bg-border-subtle" />
          <span className="relative px-3 bg-surface text-caption text-text-muted uppercase tracking-wider">
            or
          </span>
        </div>

        {/* Google OAuth Button Placeholder */}
        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          disabled
          className="flex items-center justify-center opacity-60 cursor-not-allowed"
        >
          <svg className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          <span>Continue with Google (Coming Soon)</span>
        </Button>

        {/* Link back to registration */}
        <p className="text-center text-small text-text-secondary pt-2">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="font-medium text-primary hover:text-primary-hover transition-colors"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
};
