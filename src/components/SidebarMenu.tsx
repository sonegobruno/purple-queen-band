import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './Button'
import { List, X } from '@phosphor-icons/react'

export function SidebarMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="md:hidden">
        <Button variant="ghost">
          <List size={24} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal className="bg-black/60 inset-0 fixed">
        <Dialog.Overlay />
        <Dialog.Content className="bg-dark-tiny py-4 px-5 md:py-8 md:px-10 w-[80%] md:w-[30%] h-full overflow-y-auto fixed top-0 botton-0 right-0 shadow-lg shadow-light/25">
          <header className="flex items-center justify-between">
            <Dialog.Title>Menu</Dialog.Title>
            <Dialog.Close>
              <Button variant="ghost">
                <X size={18} className="text-light" />
              </Button>
            </Dialog.Close>
          </header>
          <Dialog.Description></Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
