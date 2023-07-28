import { tv } from 'tailwind-variants'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const buttonVariants = tv({
  base: 'flex justify-center border border-transparent items-center gap-2 py-2 px-3 rounded-sm font-bold transition-all focus:shadow-primary hover:brightness-90',
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'border-primary text-primary',
      ghost: 'text-primary hover:bg-primary/5',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
