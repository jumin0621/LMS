import { apiClient } from './client'
import { ENDPOINTS } from './endpoints'

export function login(credentials) {
  return apiClient(ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    body: credentials,
    skipAuth: true,
  })
}

export function logout() {
  return apiClient(ENDPOINTS.AUTH.LOGOUT, { method: 'POST' })
}

export function getMe() {
  return apiClient(ENDPOINTS.AUTH.ME)
}
