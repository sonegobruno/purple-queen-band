'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Button, Anchor } from '@/components'
import { Guitar, House, Images, List, Phone, X } from '@phosphor-icons/react'
import { useSideBarMenu } from './hooks/useSideBarMenu'

export function SidebarMenu() {
  const { open, setOpen, getVariantByUrl } = useSideBarMenu()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Button variant="ghost" className="md:hidden">
        <Dialog.Trigger asChild>
          <List size={24} className="text-light" />
        </Dialog.Trigger>
      </Button>
      <Dialog.Portal className="bg-black/60 inset-0 fixed">
        <Dialog.Overlay />
        <Dialog.Content className="bg-dark-tiny py-4 px-5 md:py-8 md:px-10 w-[80%] md:w-[30%] h-full overflow-y-auto fixed top-0 botton-0 left-0 shadow-lg shadow-light/25">
          <header className="flex items-center justify-between">
            <Dialog.Title>Menu</Dialog.Title>
            <Button variant="ghost">
              <Dialog.Close asChild>
                <X size={18} className="text-light" />
              </Dialog.Close>
            </Button>
          </header>
          <div className="mt-4 space-y-2">
            <Anchor
              href="/"
              variant={getVariantByUrl('/')}
              className="justify-start"
            >
              <House size={18} />
              Início
            </Anchor>
            <Anchor
              href="/about"
              variant={getVariantByUrl('/about')}
              className="justify-start"
            >
              <Guitar size={18} />
              Sobre a banda
            </Anchor>
            <Anchor
              href="/schedule"
              variant={getVariantByUrl('/schedule')}
              className="justify-start"
            >
              <Images size={18} />
              Galeria
            </Anchor>
            <Anchor
              href="/contact"
              variant={getVariantByUrl('/contact')}
              className="justify-start"
            >
              <Phone size={18} />
              Contato para shows
            </Anchor>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
