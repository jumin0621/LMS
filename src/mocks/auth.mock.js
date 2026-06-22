const MOCK_USERS = [
  {
    id: 'admin',
    password: 'admin1234',
    name: '시스템관리자',
    email: 'admin@sjm.com',
    role: 'ADMIN',
  },
]

export function handleAuthMock(url, { method, body }) {
  if (url === '/auth/login' && method === 'POST') {
    const user = MOCK_USERS.find(
      (u) => u.id === body.id && u.password === body.password,
    )
    if (!user) {
      return Promise.reject({ message: '아이디 또는 비밀번호가 올바르지 않습니다.', code: 'AUTH_FAILED' })
    }
    const { password: _, ...safeUser } = user
    return Promise.resolve({
      success: true,
      data: {
        token: `mock-token-${user.id}`,
        user: safeUser,
      },
    })
  }

  if (url === '/auth/me' && method === 'GET') {
    const { password: _, ...safeUser } = MOCK_USERS[0]
    return Promise.resolve({ success: true, data: safeUser })
  }

  if (url === '/auth/logout' && method === 'POST') {
    return Promise.resolve({ success: true })
  }

  return null
}
