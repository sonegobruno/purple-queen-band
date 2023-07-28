import { forwardRef, HTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLInputElement> &
  Partial<Omit<ReturnType<UseFormRegister<FieldValues>>, 'ref'>>

export const InputForm = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        type="text"
        className={twMerge(
          'transition-all bg-dark h-8 rounded-sm p-2 border border-transparent text-sm focus:shadow-primary hover:border-primary',
          className,
        )}
        ref={ref}
        {...rest}
      />
    )
  },
)

InputForm.displayName = 'InputForm'
