import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-xl px-4 py-2 text-base text-foreground bg-none transition-all duration-150 outline-none",
        "focus:shadow-[inset_1px_1px_2px_#d1d9e6,_inset_-1px_-1px_2px_#ffffff]", 
        "shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Input }
