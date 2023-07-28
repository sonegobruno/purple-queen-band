type Props = {
  message?: string
}

export function FormFooter({ message = '' }: Props) {
  return (
    <div className=" h-[16px]">
      <strong className="text-xs text-alert">{message}</strong>
    </div>
  )
}
