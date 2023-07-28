import { forwardRef, HTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { tv } from 'tailwind-variants'

type Props = HTMLAttributes<HTMLInputElement> &
  Partial<Omit<ReturnType<UseFormRegister<FieldValues>>, 'ref'>> & {
    error?: string
  }

const input = tv({
  base: 'transition-all bg-dark h-8 rounded-sm p-2 border border-transparent text-sm ',
  variants: {
    status: {
      default: 'focus:shadow-primary  hover:border-primary',
      alert: 'focus:shadow-alert border-alert hover:border-alert/70',
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

export const InputForm = forwardRef<HTMLInputElement, Props>(
  ({ className, error = '', ...rest }, ref) => {
    return (
      <input
        type="text"
        className={input({ status: error ? 'alert' : 'default', className })}
        ref={ref}
        {...rest}
      />
    )
  },
)

InputForm.displayName = 'InputForm'
