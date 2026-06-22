import { apiClient } from './client'
import { ENDPOINTS } from './endpoints'

export function getDashboardKpi() {
  return apiClient(ENDPOINTS.DASHBOARD.KPI)
}

export function getRevenueChart() {
  return apiClient(ENDPOINTS.DASHBOARD.REVENUE_CHART)
}

export function getAccessChart() {
  return apiClient(ENDPOINTS.DASHBOARD.ACCESS_CHART)
}

export function getEnrollmentChart() {
  return apiClient(ENDPOINTS.DASHBOARD.ENROLLMENT_CHART)
}
