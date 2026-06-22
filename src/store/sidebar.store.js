import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSidebarStore = create(
  persist(
    (set, get) => ({
      isCollapsed: false,
      openSubMenus: [],

      toggleCollapse: () => set({ isCollapsed: !get().isCollapsed }),

      toggleSubMenu: (menuId) => {
        const { openSubMenus } = get()
        const isOpen = openSubMenus.includes(menuId)
        set({
          openSubMenus: isOpen
            ? openSubMenus.filter((id) => id !== menuId)
            : [...openSubMenus, menuId],
        })
      },

      isSubMenuOpen: (menuId) => get().openSubMenus.includes(menuId),
    }),
    {
      name: 'sjm-sidebar',
      partialize: (state) => ({
        isCollapsed: state.isCollapsed,
        openSubMenus: state.openSubMenus,
      }),
    },
  ),
)
