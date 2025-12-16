import { useEffect, useRef } from "react";
import "./word-appear.css";

export default function WordAppear({ text, className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <span
      ref={ref}
      className={`word-appear ${className}`}
      style={{ ...style, whiteSpace: "pre-line" }}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="word"
          style={{
            animationDelay: `${i * 0.08}s`,
            color: style.color,
          }}
        >
          {word + " "}
        </span>
      ))}
    </span>
  );
}
