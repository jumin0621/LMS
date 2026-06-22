import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function ForbiddenPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-danger">403</h1>
      <p className="text-lg text-muted-foreground">접근 권한이 없습니다.</p>
      <Link to="/admin/dashboard">
        <Button>대시보드로 이동</Button>
      </Link>
    </div>
  )
}
