import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        default: `
          bg-background text-foreground
          shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff]
          hover:shadow-[inset_1px_1px_2px_#d1d9e6,_inset_-1px_-1px_2px_#ffffff]
          active:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
          data-[pressed=true]:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
        `,
        ghost: `
          bg-background text-muted-foreground
          shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff]
          hover:shadow-none
          active:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
          data-[pressed=true]:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
        `,
        pressed: `
          bg-background text-foreground 
          shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
        `,
        destructive: `
          bg-destructive text-white 
          shadow-[8px_8px_16px_#a44,_-8px_-8px_16px_#f88]
          hover:shadow-[inset_4px_4px_8px_#a44,_inset_-4px_-4px_8px_#f88]
        `,
        outline: `
          bg-background border border-border text-foreground
          shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff]
          hover:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]
        `,
        secondary: `
          bg-secondary text-secondary-foreground 
          shadow-[8px_8px_16px_#cbd5e1,_-8px_-8px_16px_#f1f5f9]
          hover:shadow-[inset_4px_4px_8px_#cbd5e1,_inset_-4px_-4px_8px_#f1f5f9]
        `,
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
