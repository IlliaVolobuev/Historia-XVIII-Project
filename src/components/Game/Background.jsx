import React, { useEffect, useRef } from "react";

import "./Background.css";

export default function Background() {
  const bgRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 2; // скорость прокрутки
    let animationFrame;

    const move = () => {
      x -= speed;
      if (!bgRef.current) return;

      // повторяем фон бесконечно
      bgRef.current.style.backgroundPosition = `${x}px 0`;

      animationFrame = requestAnimationFrame(move);
    };

    move();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return <div className="background" ref={bgRef} />;
}
