import * as React from "react";
import { cn } from "../utils";

type InputProps = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full rounded-2xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none",
          "placeholder:text-black/40 dark:placeholder:text-white/40",
          "focus:border-black dark:border-white/15 dark:focus:border-white",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
