import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/forms/input';
import { AuthCard } from './AuthCard';
import { CheckCircle } from 'lucide-react';

export const ForgotPasswordView = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [resendStatus, setResendStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResend = () => {
    setResendStatus('sending');
    setTimeout(() => {
      setResendStatus('sent');
      setTimeout(() => setResendStatus('idle'), 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <AuthCard title="Check your email" subtitle="We've sent a password reset link to your email">
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success/10 text-success mx-auto">
            <CheckCircle className="w-6 h-6" />
          </div>

          <p className="text-body text-text-secondary leading-relaxed">
            Please check your inbox and click the verification link to reset your account password.
          </p>

          <div className="space-y-4 pt-2">
            {/* Resend Link Section */}
            <p className="text-small text-text-secondary">
              {resendStatus === 'idle' && (
                <span>
                  Didn't receive the email?{' '}
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-medium text-primary hover:text-primary-hover underline cursor-pointer transition-colors"
                  >
                    Click to resend
                  </button>
                </span>
              )}
              {resendStatus === 'sending' && (
                <span className="animate-pulse">Resending link...</span>
              )}
              {resendStatus === 'sent' && (
                <span className="text-success font-medium">Reset link resent successfully!</span>
              )}
            </p>

            <div className="border-t border-border-subtle pt-4">
              <Link
                to="/auth/login"
                className="inline-flex items-center justify-center text-small font-medium text-text-secondary hover:text-text hover:underline transition-colors"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard title="Reset password" subtitle="Enter your email to receive a password reset link">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email field */}
        <div className="space-y-1.5">
          <label htmlFor="reset-email" className="text-small font-medium text-text">
            Email address
          </label>
          <Input
            id="reset-email"
            type="email"
            placeholder="name@university.edu"
            inputSize="lg"
            required
            autoComplete="email"
          />
        </div>

        {/* Primary Submit Button */}
        <div className="pt-2">
          <Button type="submit" size="lg" fullWidth>
            Send Reset Link
          </Button>
        </div>

        {/* Back to Login Link */}
        <div className="text-center pt-2">
          <Link
            to="/auth/login"
            className="inline-flex items-center justify-center text-small font-medium text-text-secondary hover:text-text hover:underline transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </AuthCard>
  );
};
