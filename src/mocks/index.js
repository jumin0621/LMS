import { handleAuthMock } from './auth.mock'
import { handleDashboardMock } from './dashboard.mock'

function parseBody(body) {
  if (!body) return {}
  if (typeof body === 'string') return JSON.parse(body)
  return body
}

function success(data) {
  return { success: true, data }
}

export async function handleMockRequest(url, options = {}) {
  const { method = 'GET' } = options
  const body = parseBody(options.body)

  const handlers = [handleAuthMock, handleDashboardMock]

  for (const handler of handlers) {
    const result = await handler(url, { method, body })
    if (result !== null) return result
  }

  console.warn(`[Mock] Unhandled: ${method} ${url}`)
  return success(null)
}
