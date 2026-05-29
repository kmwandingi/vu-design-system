import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button.js';
import { cn } from '../lib/utils.js';
const PADDING = 16;
const CARD_WIDTH = 420;
const CARD_HEIGHT = 300;
function findTourTarget(step) {
    if (!step)
        return { element: null, foundPrimary: false };
    const primary = step.target ? document.querySelector(`[data-tour="${step.target}"]`) : null;
    const fallback = !primary && step.fallbackTarget ? document.querySelector(`[data-tour="${step.fallbackTarget}"]`) : null;
    return { element: primary ?? fallback, foundPrimary: Boolean(primary) };
}
export function GuidedTour({ open, onOpenChange, steps, startIndex = 0, className }) {
    const [index, setIndex] = useState(0);
    const [rect, setRect] = useState(null);
    const [foundPrimary, setFoundPrimary] = useState(true);
    const step = steps[index];
    useEffect(() => {
        setIndex(open ? Math.min(Math.max(startIndex, 0), Math.max(steps.length - 1, 0)) : 0);
    }, [open, startIndex, steps.length]);
    useEffect(() => {
        if (!open || !step)
            return;
        step.before?.();
        const timer = window.setTimeout(() => {
            const { element, foundPrimary } = findTourTarget(step);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: element.getBoundingClientRect().height > window.innerHeight * 0.55 ? 'start' : 'center',
            });
            setFoundPrimary(foundPrimary);
            setRect(element?.getBoundingClientRect() ?? null);
            window.setTimeout(() => setRect(element?.getBoundingClientRect() ?? null), 380);
        }, 120);
        return () => window.clearTimeout(timer);
    }, [open, step]);
    useEffect(() => {
        if (!open || !step)
            return;
        const update = () => setRect(findTourTarget(step).element?.getBoundingClientRect() ?? null);
        window.addEventListener('scroll', update, true);
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update, true);
            window.removeEventListener('resize', update);
        };
    }, [open, step]);
    const cardStyle = useMemo(() => {
        if (!rect)
            return { right: PADDING, bottom: PADDING };
        const width = Math.min(CARD_WIDTH, window.innerWidth - PADDING * 2);
        const wideRight = rect.right + PADDING + width <= window.innerWidth;
        const wideLeft = rect.left - PADDING - width >= 0;
        const top = Math.min(window.innerHeight - CARD_HEIGHT - PADDING, Math.max(PADDING, rect.top));
        if (wideRight)
            return { top, left: rect.right + PADDING };
        if (wideLeft)
            return { top, left: rect.left - width - PADDING };
        const below = rect.bottom + PADDING + CARD_HEIGHT <= window.innerHeight;
        return {
            left: Math.min(window.innerWidth - width - PADDING, Math.max(PADDING, rect.left)),
            top: below ? rect.bottom + PADDING : Math.max(PADDING, rect.top - CARD_HEIGHT - PADDING),
        };
    }, [rect]);
    if (!open || !step)
        return null;
    const done = index === steps.length - 1;
    return (_jsxs(_Fragment, { children: [rect ? (_jsx("div", { className: "fixed z-50 rounded-lg border-2 border-vu-blue shadow-[0_0_0_9999px_rgba(15,23,42,0.10)] pointer-events-none transition-all duration-300 ease-out", style: { top: rect.top - 6, left: rect.left - 6, width: rect.width + 12, height: rect.height + 12 } })) : null, _jsxs("div", { className: cn('fixed z-50 w-[420px] max-w-[calc(100vw-2rem)] rounded-lg border border-vu-blue/25 bg-card p-5 shadow-xl transition-all duration-300 ease-out', className), style: cardStyle, role: "dialog", "aria-modal": "false", "aria-labelledby": "guided-tour-title", children: [_jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsxs("p", { className: "mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground", children: ["Step ", index + 1, " of ", steps.length] }), _jsx("h3", { id: "guided-tour-title", className: "text-sm font-semibold", children: step.title })] }), _jsx("button", { className: "text-sm text-muted-foreground transition-colors hover:text-foreground", onClick: () => onOpenChange(false), "aria-label": "Close tour", children: "x" })] }), _jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: foundPrimary || !step.target ? step.body : step.missingBody ?? step.body }), step.points?.length ? (_jsx("div", { className: "mt-3 space-y-1.5", children: step.points.map((point, pointIndex) => (_jsxs("div", { className: "flex items-start gap-2 text-sm", children: [_jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vu-blue" }), _jsx("span", { children: point })] }, pointIndex))) })) : null, _jsxs("div", { className: "mt-4 flex items-center justify-between gap-2", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => onOpenChange(false), children: "Skip" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", disabled: index === 0, onClick: () => setIndex((current) => Math.max(0, current - 1)), children: "Back" }), _jsx(Button, { size: "sm", onClick: () => done ? onOpenChange(false) : setIndex((current) => Math.min(steps.length - 1, current + 1)), children: done ? 'Done' : 'Next' })] })] })] })] }));
}
//# sourceMappingURL=GuidedTour.js.map