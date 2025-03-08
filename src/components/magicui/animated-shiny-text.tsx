import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <>
      {/* Inline CSS Keyframes */}
      <style>
        {`
          @keyframes shiny-text {
            0%, 90%, 100% {
              background-position: calc(-100% - ${shimmerWidth}px) 0;
            }
            30%, 60% {
              background-position: calc(100% + ${shimmerWidth}px) 0;
            }
          }
        `}
      </style>

      <p
        style={
          {
            "--shiny-width": `${shimmerWidth}px`,
            animation: "shiny-text 8s infinite",
          } as CSSProperties
        }
        className={cn(
          "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

          // Shine effect
          "bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

          // Shine gradient
          "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

          className
        )}
      >
        {children}
      </p>
    </>
  );
};

export default AnimatedShinyText;
