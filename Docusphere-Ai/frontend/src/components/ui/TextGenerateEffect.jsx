
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Props:
 * - words: string (required)
 * - filter: boolean (default: true)
 * - duration: number (default: 0.7)
 * - delay: number (default: 0)
 * - className: string (optional)
 */
const TextGenerateEffect = ({
  words = "",
  filter = true,
  duration = 0.7,
  delay = 0,
  className = "",
}) => {
  const scope = useRef(null);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      const spans = scope.current.querySelectorAll("span");
      setTimeout(() => {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.style.opacity = "1";
            span.style.filter = filter ? "blur(0px)" : "none";
          }, index * 200);
        });
      }, delay);
    }
  }, [words, filter, duration, delay]);

  const spanStyle = {
    opacity: 0,
    filter: filter ? "blur(10px)" : "none",
    transition: `opacity ${duration}s, filter ${duration}s`,
  };

  return (
    <div className={cn("leading-snug tracking-wide", className)}>
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <span
            key={word + idx}
            className="inline-block"
            style={spanStyle}
          >
            {word}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextGenerateEffect;