import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/store/auth.store'
import { useUiStore } from '@/store/ui.store'

const loginSchema = z.object({
  id: z.string().min(1, '아이디를 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
})

export function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const showToast = useUiStore((s) => s.showToast)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { id: 'admin', password: 'admin1234' },
  })

  const onSubmit = async (data) => {
    setError('')
    try {
      await login(data)
      showToast({ type: 'success', message: '로그인되었습니다.' })
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message || '로그인에 실패했습니다.')
    }
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">SJM LMS</CardTitle>
        <p className="text-sm text-muted-foreground">관리자 시스템에 로그인하세요</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="id">아이디</Label>
            <Input id="id" placeholder="아이디" {...register('id')} />
            {errors.id && (
              <p className="text-xs text-danger">{errors.id.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-xs text-danger">{errors.password.message}</p>
            )}
          </div>
          {error && (
            <p className="rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">{error}</p>
          )}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? '로그인 중...' : '로그인'}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            테스트 계정: admin / admin1234
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
