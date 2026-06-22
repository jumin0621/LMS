import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import * as authApi from '@/api/auth.api'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (credentials) => {
        const result = await authApi.login(credentials)
        set({
          user: result.data.user,
          token: result.data.token,
          isAuthenticated: true,
        })
        return result.data
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false })
      },

      setUser: (user) => set({ user }),

      hydrate: () => {
        const { token } = get()
        if (token) {
          set({ isAuthenticated: true })
        }
      },
    }),
    {
      name: 'sjm-auth',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
