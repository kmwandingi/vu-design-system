import type { FormEvent, ReactNode } from 'react';
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
export declare function AuthLanding({ eyebrow, title, description, features, children, className }: AuthLandingProps): import("react/jsx-runtime").JSX.Element;
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
export declare function LoginCard({ title, description, username, password, onUsernameChange, onPasswordChange, onSubmit, error, busy, submitLabel, busyLabel, }: LoginCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AuthLanding.d.ts.map