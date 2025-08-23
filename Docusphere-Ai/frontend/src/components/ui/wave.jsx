// Converted from Vue SFC to React JSX with hooks and props

import React, { useRef, useEffect, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../../lib/utils";

const defaultColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];

function isSafariBrowser() {
  if (typeof window === "undefined") return false;
  return (
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}

export default function WavyBackground({
  className = "",
  containerClass = "",
  colors = defaultColors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  children,
  ...rest
}) {
  const canvasRef = useRef(null);
  const animationId = useRef();
  const noise = useRef(createNoise3D());
  const isSafari = isSafariBrowser();

  const getSpeed = useCallback(() => (speed === "slow" ? 0.001 : 0.002), [speed]);

  const drawWave = useCallback(
    (ctx, w, h, nt) => {
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i % colors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise.current(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [colors, waveWidth]
  );

  useEffect(() => {
    let w, h, nt = 0;
    const canvas = canvasRef.current;
    let ctx;
    let parent;

    function resize() {
      if (canvas && parent) {
        w = canvas.width = parent.clientWidth;
        h = canvas.height = parent.clientHeight;
        ctx.filter = `blur(${blur}px)`;
      }
    }

    function render() {
      if (!ctx) return;
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, nt);
      nt += getSpeed();
      animationId.current = requestAnimationFrame(render);
    }

    if (canvas) {
      ctx = canvas.getContext("2d");
      parent = canvas.parentElement;
      resize();
      window.addEventListener("resize", resize);
      render();
    }

    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener("resize", resize);
    };
  }, [backgroundFill, blur, waveOpacity, drawWave, getSpeed]);

  return (
    <div
      className={cn(
        "relative w-full h-full",
        containerClass
      )}
      {...rest}
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      ></canvas>
      <div className={cn("relative z-10 pointer-events-auto", className)}>
        {children}
      </div>
    </div>
  );
}