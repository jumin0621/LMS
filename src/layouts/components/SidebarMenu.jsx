import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useSidebarStore } from '@/store/sidebar.store'
import { ADMIN_MENU } from '@/utils/menu'

export function SidebarMenu({ collapsed }) {
  const location = useLocation()
  const { openSubMenus, toggleSubMenu } = useSidebarStore()

  return (
    <nav className="flex flex-col gap-1 px-3 py-4">
      {ADMIN_MENU.map((item) => {
        const Icon = item.icon

        if (!item.children) {
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-active text-white'
                  : 'text-sidebar-muted hover:bg-white/10 hover:text-sidebar-foreground',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          )
        }

        const isOpen = openSubMenus.includes(item.id)
        const isGroupActive = item.children.some((child) =>
          location.pathname.startsWith(child.path),
        )

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => !collapsed && toggleSubMenu(item.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                isGroupActive
                  ? 'text-sidebar-foreground'
                  : 'text-sidebar-muted hover:bg-white/10 hover:text-sidebar-foreground',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </>
              )}
            </button>
            {!collapsed && isOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                {item.children.map((child) => {
                  const isActive = location.pathname === child.path
                  return (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={cn(
                        'rounded-md px-3 py-2 text-sm transition-colors',
                        isActive
                          ? 'bg-sidebar-active text-white'
                          : 'text-sidebar-muted hover:bg-white/10 hover:text-sidebar-foreground',
                      )}
                    >
                      {child.label}
                    </NavLink>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
