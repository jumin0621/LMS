import { useAuthStore } from '@/store/auth.store'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

let mockHandler = null

export async function initMockHandler() {
  if (USE_MOCK && !mockHandler) {
    const mod = await import('@/mocks/index.js')
    mockHandler = mod.handleMockRequest
  }
}

function getToken() {
  return useAuthStore.getState().token
}

export class ApiError extends Error {
  constructor(message, code = 'UNKNOWN', status = 500) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.status = status
  }
}

export async function apiClient(url, options = {}) {
  await initMockHandler()

  const { method = 'GET', body, headers = {}, skipAuth = false } = options

  if (USE_MOCK && mockHandler) {
    return mockHandler(url, { method, body, headers })
  }

  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (!skipAuth) {
    const token = getToken()
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`
    }
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    if (response.status === 401) {
      useAuthStore.getState().logout()
    }
    throw new ApiError(
      data.message || '요청 처리 중 오류가 발생했습니다.',
      data.code,
      response.status,
    )
  }

  return data
}
