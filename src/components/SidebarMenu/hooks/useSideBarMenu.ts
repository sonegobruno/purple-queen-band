'use client'
import { ButtonVariant } from '@/utils/buttonVariants'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function useSideBarMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  function getVariantByUrl(url: string): ButtonVariant {
    return url === pathname ? 'primary' : 'ghost'
  }

  return {
    open,
    setOpen,
    getVariantByUrl,
  }
}
