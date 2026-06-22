import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { useSidebarStore } from '@/store/sidebar.store'
import { LAYOUT } from '@/utils/constants'

export function AdminLayout() {
  const { isCollapsed } = useSidebarStore()
  const sidebarWidth = isCollapsed ? 72 : LAYOUT.SIDEBAR_WIDTH

  return (
    <div style={{ '--sidebar-width': `${sidebarWidth}px` }}>
      <Sidebar />
      <Header />
      <main
        className="min-h-screen transition-all duration-200"
        style={{
          marginLeft: sidebarWidth,
          paddingTop: LAYOUT.HEADER_HEIGHT + LAYOUT.CONTENT_PADDING,
          paddingRight: LAYOUT.CONTENT_PADDING,
          paddingBottom: LAYOUT.CONTENT_PADDING,
          paddingLeft: LAYOUT.CONTENT_PADDING,
        }}
      >
        <Outlet />
      </main>
    </div>
  )
}
