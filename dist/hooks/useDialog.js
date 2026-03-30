import { useEffect, useRef } from 'react';
const FOCUSABLE_ELEMENTS = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
].join(', ');
export function useFocusTrap(active, containerRef) {
    const previousActiveElement = useRef(null);
    useEffect(() => {
        if (!active)
            return;
        // Store the element that was focused before opening
        previousActiveElement.current = document.activeElement;
        const container = containerRef.current;
        if (!container)
            return;
        // Focus the first focusable element
        const focusableElements = container.querySelectorAll(FOCUSABLE_ELEMENTS);
        const firstElement = focusableElements[0];
        if (firstElement) {
            firstElement.focus();
        }
        const handleKeyDown = (event) => {
            if (event.key !== 'Tab')
                return;
            const focusable = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENTS));
            if (focusable.length === 0)
                return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            // Restore focus when closing
            previousActiveElement.current?.focus();
        };
    }, [active, containerRef]);
}
export function useScrollLock(active) {
    useEffect(() => {
        if (!active)
            return;
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [active]);
}
export function useClickOutside(ref, handler, active) {
    const savedHandler = useRef(handler);
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(() => {
        if (!active)
            return;
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                savedHandler.current();
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [active, ref]);
}
//# sourceMappingURL=useDialog.js.map