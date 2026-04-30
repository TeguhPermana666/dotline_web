import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // 1. BASE STYLES: Diubah menjadi rounded-none, uppercase, dan tracking lebar
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // 2. TEMA WARNA: Disesuaikan dengan "Burn Ginger" (Gingerbread)
        default: 
          "bg-gingerbread text-white hover:bg-gingerbread-hover shadow-sm",
        outline:
          "border-white/20 bg-transparent text-white hover:border-gingerbread hover:text-gingerbread hover:bg-gingerbread/5",
        secondary:
          "bg-white/10 text-white hover:bg-white/20",
        ghost:
          "hover:bg-white/5 hover:text-gingerbread text-white/80",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: 
          "text-gingerbread underline-offset-4 hover:underline",
      },
      size: {
        // 3. UKURAN: Disesuaikan agar lebih proporsional untuk tombol tanpa lengkungan
        default: "h-12 px-8 py-3",
        xs: "h-8 px-4 text-[10px]",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 py-4 text-base",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
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
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }