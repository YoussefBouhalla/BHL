"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number
}

export function Stagger({ className, children, staggerDelay = 60, ...props }: StaggerProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isIntersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "-10%" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const childrenArray = React.Children.toArray(children)

  return (
    <div ref={ref} className={className} {...props}>
      {childrenArray.map((child, i) => (
        <div
          key={i}
          className={cn(
            "transition-all duration-[var(--duration-slow)] ease-[var(--ease-out)]",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
          style={{ transitionDelay: `${i * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}