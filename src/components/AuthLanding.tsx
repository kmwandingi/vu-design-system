import type { FormEvent, ReactNode } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

export type AuthLandingFeature = {
  title: string;
  description: string;
  tone?: 'blue' | 'purple';
};

type AuthLandingProps = {
  eyebrow: ReactNode;
  title: string;
  description: string;
  features: AuthLandingFeature[];
  children: ReactNode;
  className?: string;
};

export function AuthLanding({ eyebrow, title, description, features, children, className }: AuthLandingProps) {
  return (
    <div className={cn('min-h-screen bg-slate-50', className)}>
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-8 py-10">
        <div className="grid w-full grid-cols-[1fr_420px] gap-10">
          <div className="flex flex-col justify-center">
            <PageHeader eyebrow={<span className="text-vu-blue">{eyebrow}</span>} title={title} description={description} />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const tone = feature.tone ?? (index % 2 === 0 ? 'blue' : 'purple');
                return (
                  <Card
                    key={index}
                    padding="lg"
                    className={cn(
                      'border-l-2',
                      tone === 'blue' ? 'border-vu-blue bg-vu-blue-50/30' : 'border-vu-purple bg-vu-purple-50/20',
                    )}
                  >
                    <SectionHeader title={feature.title} description={feature.description} />
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

type LoginCardProps = {
  title: string;
  description: string;
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  error?: string;
  busy?: boolean;
  submitLabel?: string;
  busyLabel?: string;
};

export function LoginCard({
  title,
  description,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  error,
  busy,
  submitLabel = 'Sign in',
  busyLabel = 'Signing in...',
}: LoginCardProps) {
  return (
    <Card padding="lg" className="w-full bg-card">
      <form className="space-y-6" onSubmit={onSubmit}>
        <SectionHeader title={title} description={description} />
        <div className="space-y-4">
          <FormField label="Username" required>
            <Input aria-label="Username" value={username} onChange={(event) => onUsernameChange(event.target.value)} autoComplete="username" />
          </FormField>
          <FormField label="Password" required error={error}>
            <Input aria-label="Password" type="password" value={password} onChange={(event) => onPasswordChange(event.target.value)} autoComplete="current-password" />
          </FormField>
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={busy || !username || !password}>
          {busy ? busyLabel : submitLabel}
        </Button>
      </form>
    </Card>
  );
}
