import { UserMenu } from './UserMenu'
import { LAYOUT } from '@/utils/constants'

export function Header() {
  return (
    <header
      className="fixed right-0 top-0 z-20 flex items-center justify-between border-b border-border bg-card px-6"
      style={{ height: LAYOUT.HEADER_HEIGHT, left: 'var(--sidebar-width)' }}
    >
      <div />
      <UserMenu />
    </header>
  )
}
