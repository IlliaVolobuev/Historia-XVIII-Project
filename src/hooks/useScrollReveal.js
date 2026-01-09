import { useEffect, useRef } from "react";

export default function useScrollReveal(options = { threshold: 0.2 }) {
  const elementsRef = useRef([]);

  const setRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // оптимизация
        }
      });
    }, options);

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);

  return setRef;
}
