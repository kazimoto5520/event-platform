import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-60 outline-none",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-black px-6 py-3 text-white hover:opacity-90 dark:bg-white dark:text-black",
        outline:
          "rounded-full border border-black/15 bg-transparent px-6 py-3 text-black hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10",
        ghost:
          "rounded-full bg-transparent px-6 py-3 text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
        link: "px-0 py-0 underline underline-offset-4",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-base",
        icon: "h-10 w-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
