import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const AuthCard = ({ title, subtitle, children }: AuthCardProps) => {
  return (
    <Card className="w-full shadow-lg border-border bg-surface p-2 sm:p-4 rounded-xl">
      <CardHeader className="flex flex-col items-center text-center pb-4">
        {/* Brand Header Section */}
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-overline font-semibold tracking-widest uppercase text-text-secondary">
            Campus Connect
          </span>
        </div>

        <CardTitle className="text-h2 font-bold tracking-tight text-text">{title}</CardTitle>
        <CardDescription className="text-body text-text-secondary mt-1">{subtitle}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};
