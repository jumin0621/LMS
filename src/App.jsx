import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import { useAuthStore } from '@/store/auth.store'
import { useUiStore } from '@/store/ui.store'
import { cn } from '@/utils/cn'

function Toast() {
  const toast = useUiStore((s) => s.toast)
  const hideToast = useUiStore((s) => s.hideToast)

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(hideToast, 3000)
    return () => clearTimeout(timer)
  }, [toast, hideToast])

  if (!toast) return null

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg',
        toast.type === 'success' && 'bg-success',
        toast.type === 'error' && 'bg-danger',
        !toast.type && 'bg-foreground',
      )}
    >
      {toast.message}
    </div>
  )
}

export default function App() {
  const hydrate = useAuthStore((s) => s.hydrate)

  useEffect(() => {
    hydrate()
  }, [hydrate])

  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  )
}
