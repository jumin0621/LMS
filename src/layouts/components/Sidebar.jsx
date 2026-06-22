import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { SidebarMenu } from './SidebarMenu'
import { useSidebarStore } from '@/store/sidebar.store'
import { LAYOUT } from '@/utils/constants'

export function Sidebar() {
  const { isCollapsed, toggleCollapse } = useSidebarStore()
  const width = isCollapsed ? 72 : LAYOUT.SIDEBAR_WIDTH

  return (
    <aside
      className="fixed left-0 top-0 z-30 flex h-screen flex-col bg-sidebar transition-all duration-200"
      style={{ width }}
    >
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-4">
        {!isCollapsed && (
          <span className="text-lg font-bold text-white">SJM LMS</span>
        )}
        <button
          type="button"
          onClick={toggleCollapse}
          className="rounded-md p-1.5 text-sidebar-muted hover:bg-white/10 hover:text-white"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarMenu collapsed={isCollapsed} />
      </div>
    </aside>
  )
}
