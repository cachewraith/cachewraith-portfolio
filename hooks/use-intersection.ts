"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseIntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * Hook to detect when an element enters the viewport
 * @param options - IntersectionObserver options
 * @returns Ref to attach to element and boolean indicating visibility
 */
export function useIntersection<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0, root = null, rootMargin = "0px", freezeOnceVisible = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If frozen and already visible, don't observe
    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return [ref, isVisible];
}

/**
 * Hook to detect when multiple elements enter the viewport
 * @param itemCount - Number of items to observe
 * @param options - IntersectionObserver options
 * @returns Ref callback and array of visibility states
 */
export function useMultipleIntersections(
  itemCount: number,
  options: IntersectionObserverInit = {}
): [(node: HTMLElement | null, index: number) => void, boolean[]] {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibilityStates, setVisibilityStates] = useState<boolean[]>(
    () => Array(itemCount).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibilityStates((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        options
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [itemCount, options]);

  const setRef = (node: HTMLElement | null, index: number) => {
    refs.current[index] = node;
  };

  return [setRef, visibilityStates];
}
