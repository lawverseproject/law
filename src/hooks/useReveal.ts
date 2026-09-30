import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook. Adds `is-visible` class when the element
 * enters the viewport. Returns a ref to attach to the element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (options?.once !== false) observer.unobserve(entry.target);
          } else if (options?.once === false) {
            setVisible(false);
          }
        });
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, visible };
}
