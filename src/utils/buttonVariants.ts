export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const getButtonVariantStyle = (variant: ButtonVariant) => {
  let style = ''

  if (variant === 'primary') {
    style += ' bg-primary'
  }

  if (variant === 'secondary') {
    style += ' border-primary text-primary'
  }

  if (variant === 'ghost') {
    style += ' text-primary hover:bg-primary/5'
  }

  return style
}
