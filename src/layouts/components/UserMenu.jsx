import { LogOut, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/auth.store'
import { Button } from '@/components/ui/button'

export function UserMenu() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <User className="h-4 w-4 text-primary" />
        </div>
        <div className="hidden sm:block">
          <p className="font-medium">{user?.name || '관리자'}</p>
          <p className="text-xs text-muted-foreground">{user?.role || 'ADMIN'}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={handleLogout} title="로그아웃">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}
