import { create } from 'zustand'

export const useUiStore = create((set) => ({
  globalLoading: false,
  toast: null,

  setGlobalLoading: (globalLoading) => set({ globalLoading }),

  showToast: (toast) => set({ toast }),

  hideToast: () => set({ toast: null }),
}))
