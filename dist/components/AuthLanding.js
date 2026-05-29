import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../components/Button.js';
import { Card } from '../components/Card.js';
import { FormField } from '../components/FormField.js';
import { Input } from '../components/Input.js';
import { PageHeader } from '../components/PageHeader.js';
import { SectionHeader } from '../components/SectionHeader.js';
import { cn } from '../lib/utils.js';
export function AuthLanding({ eyebrow, title, description, features, children, className }) {
    return (_jsx("div", { className: cn('min-h-screen bg-slate-50', className), children: _jsx("div", { className: "mx-auto flex min-h-screen max-w-5xl items-center px-8 py-10", children: _jsxs("div", { className: "grid w-full grid-cols-[1fr_420px] gap-10", children: [_jsxs("div", { className: "flex flex-col justify-center", children: [_jsx(PageHeader, { eyebrow: _jsx("span", { className: "text-vu-blue", children: eyebrow }), title: title, description: description }), _jsx("div", { className: "mt-8 grid grid-cols-2 gap-4", children: features.map((feature, index) => {
                                    const tone = feature.tone ?? (index % 2 === 0 ? 'blue' : 'purple');
                                    return (_jsx(Card, { padding: "lg", className: cn('border-l-2', tone === 'blue' ? 'border-vu-blue bg-vu-blue-50/30' : 'border-vu-purple bg-vu-purple-50/20'), children: _jsx(SectionHeader, { title: feature.title, description: feature.description }) }, index));
                                }) })] }), _jsx("div", { className: "flex items-center", children: children })] }) }) }));
}
export function LoginCard({ title, description, username, password, onUsernameChange, onPasswordChange, onSubmit, error, busy, submitLabel = 'Sign in', busyLabel = 'Signing in...', }) {
    return (_jsx(Card, { padding: "lg", className: "w-full bg-card", children: _jsxs("form", { className: "space-y-6", onSubmit: onSubmit, children: [_jsx(SectionHeader, { title: title, description: description }), _jsxs("div", { className: "space-y-4", children: [_jsx(FormField, { label: "Username", required: true, children: _jsx(Input, { "aria-label": "Username", value: username, onChange: (event) => onUsernameChange(event.target.value), autoComplete: "username" }) }), _jsx(FormField, { label: "Password", required: true, error: error, children: _jsx(Input, { "aria-label": "Password", type: "password", value: password, onChange: (event) => onPasswordChange(event.target.value), autoComplete: "current-password" }) })] }), _jsx(Button, { type: "submit", variant: "primary", className: "w-full", disabled: busy || !username || !password, children: busy ? busyLabel : submitLabel })] }) }));
}
//# sourceMappingURL=AuthLanding.js.map