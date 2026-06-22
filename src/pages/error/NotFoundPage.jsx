import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/admin/dashboard">
        <Button>대시보드로 이동</Button>
      </Link>
    </div>
  )
}
