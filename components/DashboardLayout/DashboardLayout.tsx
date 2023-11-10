'use client'
import Logo from '@components/Logo'
import {Listbox, ListboxItem} from '@nextui-org/listbox'
import {usePathname} from 'next/navigation'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

const NAV_LINKS = [
  {
    href: '/dashboard',
    label: 'inicio',
  },
  {
    href: '/dashboard/categories',
    label: 'Categories',
  },
  {
    href: '/dashboard/tags',
    label: 'Tags',
  },
  {
    href: '/dashboard/products',
    label: 'Products',
  },
  {
    href: '/dashboard/orders',
    label: 'Orders',
  },

  {
    href: '/dashboard/settings',
    label: 'Settings',
  },
]

export default function DashboardLayout({children}: DashboardLayoutProps) {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <div className="bg-background text-foreground">
        <div className="w-full px-4">
          <Logo className="h-24 w-full" href="/dashboard" />
        </div>
        <Listbox
          aria-label="Main navigation"
          variant="flat"
          color="primary"
          classNames={{
            base: 'p-4 gap-2',
            list: 'gap-2',
          }}
          itemClasses={{
            base: 'p-4 py-3',
          }}
        >
          {NAV_LINKS.map(({href, label}) => (
            <ListboxItem
              key={href}
              href={href}
              aria-label={label}
              className={href === pathname ? 'bg-primary/20 text-primary' : ''}
            >
              {label}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
      <div className="bg-neutral-100">
        <div className="bg-white shadow-sm">xd</div>
        {children}
      </div>
    </div>
  )
}
