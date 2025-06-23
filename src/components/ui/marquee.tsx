import { cn } from "../../lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const directionClass = vertical ? "flex-col" : "flex-row";
  const animationClass = vertical
    ? "animate-marquee-vertical"
    : "animate-marquee";

  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden py-4 px-2 [--duration:30s] [--gap:2rem] [gap:var(--gap)]",
        directionClass,
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around [gap:var(--gap)]",
            directionClass,
            animationClass,
            {
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            }
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
