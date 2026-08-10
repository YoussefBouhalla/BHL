import * as React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({ className, as: Comp = "h2", ...props }: HeadingProps) {
  return (
    <Comp
      className={cn(
        "font-display font-bold tracking-tight text-foreground",
        {
          "text-4xl md:text-5xl lg:text-6xl": Comp === "h1",
          "text-3xl md:text-4xl": Comp === "h2",
          "text-2xl md:text-3xl": Comp === "h3",
          "text-xl md:text-2xl": Comp === "h4",
          "text-lg md:text-xl": Comp === "h5",
          "text-base md:text-lg": Comp === "h6",
        },
        className
      )}
      {...props}
    />
  )
}