import React, { useRef, useEffect, useMemo } from "react";
import { cn } from "../../lib/utils";
import { animate } from "framer-motion";

// Props interface for React
const defaultProps = {
  blur: 0,
  inactiveZone: 0.7,
  proximity: 0,
  spread: 20,
  variant: "dark", // Change default variant to dark
  glow: false,
  movementDuration: 2,
  borderWidth: 1,
  disabled: true,
};

function Glowingeffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "dark", // Default to dark variant
  glow = false,
  className = "",
  disabled = true,
  movementDuration = 2,
  borderWidth = 1,
  ...rest
}) {
  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(0);

  const containerStyles = useMemo(() => {
    return {
      "--blur": `${blur}px`,
      "--spread": spread,
      "--start": "0",
      "--active": "0",
      "--glowingeffect-border-width": `${borderWidth}px`,
      "--repeating-conic-gradient-times": "5",
      "--gradient":
        variant === "dark" // Use dark variant
          ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #00ffea, /* Bright cyan for glow */
                  #00ffea calc(25% / var(--repeating-conic-gradient-times))
                )`
          : `radial-gradient(circle, #00ffea 10%, #00ffea00 20%),
                radial-gradient(circle at 40% 40%, #00ffea 5%, #00ffea00 15%),
                radial-gradient(circle at 60% 60%, #00ffea 10%, #00ffea00 20%),
                radial-gradient(circle at 40% 60%, #00ffea 10%, #00ffea00 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #00ffea 0%,
                  #00ffea calc(25% / var(--repeating-conic-gradient-times)),
                  #00ffea calc(50% / var(--repeating-conic-gradient-times)),
                  #00ffea calc(75% / var(--repeating-conic-gradient-times)),
                  #00ffea calc(100% / var(--repeating-conic-gradient-times))
                )`,
    };
    // eslint-disable-next-line
  }, [blur, spread, variant, borderWidth]);

  // ... rest of the component remains unchanged

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
          glow && "opacity-100",
          variant === "dark" && "border-black", // Change to dark border
          disabled && "!block"
        )}
      />
      <div
        ref={containerRef}
        style={containerStyles}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
          glow && "opacity-100",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
        {...rest}
      >
        <div
          className={cn(
            "rounded-[inherit]",
            "absolute",
            "inset-0",
            "pointer-events-none",
            
           
            "opacity-80"
          )}
        //   style={{
        //     background: "radial-gradient(circle, #00ffea 10%, #00ffea00 60%)"
        //   }}
        />
      </div>
    </>
  );
}

export default Glowingeffect;
