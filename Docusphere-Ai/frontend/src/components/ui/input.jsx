import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export default function Input({
  defaultValue = "",
  value,
  onChange,
  className,
  containerClass,
  ...rest
}) {
  const inputContainerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const radius = 100;

  const handleMouseMove = useCallback((e) => {
    if (!inputContainerRef.current) return;
    const { left, top } = inputContainerRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  const containerBg = visible
    ? `radial-gradient(${radius}px circle at ${mouse.x}px ${mouse.y}px, var(--blue-500), transparent 80%)`
    : `radial-gradient(0px circle at ${mouse.x}px ${mouse.y}px, var(--blue-500), transparent 80%)`;

  return (
    <div
      ref={inputContainerRef}
      className={cn("group/input rounded-lg p-[2px] transition duration-300", containerClass)}
      style={{ background: containerBg }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <input
        {...rest}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400`,
          className
        )}
      />
      <style jsx>{`
        input {
          box-shadow:
            0px 2px 3px -1px rgba(0, 0, 0, 0.1),
            0px 1px 0px 0px rgba(25, 28, 33, 0.02),
            0px 0px 0px 1px rgba(25, 28, 33, 0.08);
        }
      `}</style>
    </div>
  );
}