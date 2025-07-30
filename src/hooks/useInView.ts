import { useEffect, useState, RefObject } from "react";

export function useInView<T extends HTMLElement>(
    ref: RefObject<T | null>,
    options?: IntersectionObserverInit
): boolean {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
        );
        observer.observe(node);

        return () => observer.disconnect();
    }, [ref, options]);

    return inView;
}