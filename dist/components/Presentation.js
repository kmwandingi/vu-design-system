import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '../lib/utils.js';
export function Slide({ variant = 'content', eyebrow, title, subtitle, body, bullets, left, right, quote, attribution, tone = 'default', className, }) {
    return (_jsxs("div", { className: cn('relative w-full aspect-video overflow-hidden', tone === 'default' && 'bg-card', tone === 'subtle' && 'bg-slate-50',
        // quote slides look better tinted by default; brand explicit override
        tone === 'brand' && 'bg-vu-blue-50', className), children: [variant === 'title' && (_jsxs("div", { className: "flex h-full flex-col items-center justify-center px-16 py-12 text-center", children: [eyebrow && (_jsx("span", { className: "mb-6 inline-flex items-center rounded-full border border-vu-blue-200 bg-vu-blue-50 px-3.5 py-1 text-xs font-medium tracking-wider text-vu-blue-700 uppercase", children: eyebrow })), _jsx("h1", { className: "text-4xl font-bold text-foreground leading-tight", children: title }), subtitle && (_jsx("p", { className: "mt-5 max-w-lg text-base text-muted-foreground leading-relaxed", children: subtitle }))] })), variant === 'content' && (
            // title anchors top; bullets/body fill remaining height with space-evenly distribution
            _jsxs("div", { className: "flex h-full flex-col px-14 py-10", children: [title && (_jsxs("div", { className: "shrink-0 mb-4", children: [_jsx("h2", { className: "text-xl font-semibold text-foreground", children: title }), _jsx("div", { className: "mt-2 h-0.5 w-10 rounded-full bg-vu-blue" })] })), body && (_jsx("div", { className: "flex flex-1 items-center", children: _jsx("p", { className: "text-sm text-foreground leading-relaxed", children: body }) })), bullets && (_jsx("ul", { className: "flex flex-1 flex-col justify-evenly", children: bullets.map((b, i) => (_jsxs("li", { className: "flex items-start gap-3.5 text-sm text-foreground", children: [_jsx("span", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-vu-blue" }), _jsx("span", { className: "leading-relaxed", children: b })] }, i))) }))] })), variant === 'two-col' && (_jsxs("div", { className: "flex h-full flex-col px-14 py-10", children: [title && (_jsxs("div", { className: "mb-6 shrink-0", children: [_jsx("h2", { className: "text-xl font-semibold text-foreground", children: title }), _jsx("div", { className: "mt-2 h-0.5 w-10 rounded-full bg-vu-blue" })] })), _jsxs("div", { className: "flex flex-1 gap-8 min-h-0 items-stretch", children: [_jsx("div", { className: "flex-1 overflow-hidden text-sm text-foreground", children: left }), _jsx("div", { className: "w-px shrink-0 bg-border" }), _jsx("div", { className: "flex-1 overflow-hidden text-sm text-foreground", children: right })] })] })), variant === 'quote' && (_jsxs("div", { className: cn('flex h-full flex-col items-center justify-center px-20 py-12 text-center', tone === 'default' && 'bg-vu-blue-50'), children: [_jsx("div", { className: "mb-5 text-vu-blue-300", "aria-hidden": "true", children: _jsx("svg", { width: "40", height: "32", viewBox: "0 0 40 32", fill: "currentColor", children: _jsx("path", { d: "M0 32V19.2C0 7.467 6.4 1.867 19.2 0L20.8 3.2C14.4 4.8 10.667 8.533 10.667 14.4H16V32H0ZM24 32V19.2C24 7.467 30.4 1.867 43.2 0L44.8 3.2C38.4 4.8 34.667 8.533 34.667 14.4H40V32H24Z" }) }) }), _jsx("blockquote", { className: "max-w-2xl text-xl font-medium text-vu-blue-900 leading-relaxed", children: quote }), attribution && (_jsx("p", { className: "mt-6 text-xs uppercase tracking-widest text-vu-blue-600", children: attribution }))] })), variant === 'summary' && (_jsxs("div", { className: "flex h-full flex-col px-14 py-10", children: [title && (_jsxs("div", { className: "shrink-0 mb-4", children: [_jsx("h2", { className: "text-xl font-semibold text-foreground", children: title }), _jsx("div", { className: "mt-2 h-0.5 w-10 rounded-full bg-vu-orange" })] })), bullets && (_jsx("ul", { className: "flex flex-1 flex-col justify-evenly", children: bullets.map((b, i) => (_jsxs("li", { className: "flex items-start gap-4", children: [_jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vu-blue text-[11px] font-bold text-white", children: i + 1 }), _jsx("span", { className: "pt-0.5 text-sm text-foreground leading-relaxed", children: b })] }, i))) }))] }))] }));
}
export function Presentation({ children, className }) {
    const slides = Children.toArray(children);
    const total = slides.length;
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const containerRef = useRef(null);
    const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
    const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);
    useEffect(() => {
        const el = containerRef.current;
        if (!el)
            return;
        function onKey(e) {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                next();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prev();
            }
        }
        el.addEventListener('keydown', onKey);
        return () => el.removeEventListener('keydown', onKey);
    }, [next, prev]);
    useEffect(() => {
        const onFSChange = () => setFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFSChange);
        return () => document.removeEventListener('fullscreenchange', onFSChange);
    }, []);
    const toggleFullscreen = () => {
        if (!fullscreen)
            containerRef.current?.requestFullscreen?.();
        else
            document.exitFullscreen?.();
    };
    const navBtn = cn('flex items-center justify-center rounded-md p-1.5 transition-colors duration-150', 'text-muted-foreground hover:bg-muted hover:text-foreground', 'disabled:opacity-30 disabled:pointer-events-none');
    return (_jsxs("div", { ref: containerRef, tabIndex: 0, className: cn('overflow-hidden rounded-xl border border-border bg-background outline-none', 'focus-visible:ring-2 focus-visible:ring-vu-blue/30', fullscreen && 'fixed inset-0 z-50 rounded-none border-none', className), children: [_jsx("div", { className: cn(fullscreen && 'flex h-[calc(100vh-48px)] items-center justify-center bg-slate-900'), children: _jsx("div", { className: cn('w-full', fullscreen && 'max-w-[calc((100vh-48px)*16/9)]'), children: slides[current] }) }), _jsxs("div", { className: cn('flex items-center justify-between border-t border-border bg-muted/30 px-3 py-1.5', fullscreen && 'absolute bottom-0 left-0 right-0 border-t border-border/60 bg-background/95 backdrop-blur-sm'), children: [_jsx("div", { className: "flex items-center gap-1.5", role: "tablist", "aria-label": "Slides", children: slides.map((_, i) => (_jsx("button", { role: "tab", "aria-selected": i === current, "aria-label": `Slide ${i + 1}`, onClick: () => setCurrent(i), className: cn('rounded-full transition-all duration-150', i === current
                                ? 'h-2 w-4 bg-vu-blue'
                                : 'h-2 w-2 bg-muted-foreground/25 hover:bg-muted-foreground/50') }, i))) }), _jsxs("span", { className: "text-xs tabular-nums text-muted-foreground", children: [current + 1, " / ", total] }), _jsxs("div", { className: "flex items-center gap-0.5", children: [_jsx("button", { onClick: prev, disabled: current === 0, "aria-label": "Previous slide", className: navBtn, children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), _jsx("button", { onClick: next, disabled: current === total - 1, "aria-label": "Next slide", className: navBtn, children: _jsx(ChevronRight, { className: "h-4 w-4" }) }), _jsx("button", { onClick: toggleFullscreen, "aria-label": "Toggle fullscreen", className: cn(navBtn, 'ml-1'), children: fullscreen ? _jsx(Minimize2, { className: "h-4 w-4" }) : _jsx(Maximize2, { className: "h-4 w-4" }) })] })] })] }));
}
//# sourceMappingURL=Presentation.js.map