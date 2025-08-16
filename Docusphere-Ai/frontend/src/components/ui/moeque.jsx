import { cn } from "../../lib/utils";

// MarqueeProps JSDoc for reference:
/**
 * @param {Object} props
 * @param {string} [props.className] Optional CSS class name to apply custom styles
 * @param {boolean} [props.reverse=false] Whether to reverse the animation direction
 * @param {boolean} [props.pauseOnHover=false] Whether to pause the animation on hover
 * @param {React.ReactNode} props.children Content to be displayed in the marquee
 * @param {boolean} [props.vertical=false] Whether to animate vertically instead of horizontally
 * @param {number} [props.repeat=4] Number of times to repeat the content
 * @returns {JSX.Element}
 */

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
