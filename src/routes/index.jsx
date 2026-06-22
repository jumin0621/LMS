import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AdminLayout } from '@/layouts/AdminLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { AuthGuard, GuestGuard } from '@/routes/guards/AuthGuard'
import { adminRoutes } from '@/routes/admin.routes'
import { LoginPage } from '@/pages/auth/LoginPage'
import { DashboardPage } from '@/pages/admin/DashboardPage'
import { NotFoundPage } from '@/pages/error/NotFoundPage'
import { ForbiddenPage } from '@/pages/error/ForbiddenPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/admin/dashboard" replace />,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
    ],
  },
  {
    path: '/admin',
    element: <AuthGuard />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          { path: 'dashboard', element: <DashboardPage /> },
          ...adminRoutes,
        ],
      },
    ],
  },
  { path: '/403', element: <ForbiddenPage /> },
  { path: '*', element: <NotFoundPage /> },
])
