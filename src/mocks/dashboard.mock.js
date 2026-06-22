export function handleDashboardMock(url) {
  if (url === '/dashboard/kpi') {
    return Promise.resolve({
      success: true,
      data: {
        totalMembers: 1284,
        todaySignups: 12,
        activeCourses: 34,
        completions: 892,
        monthlyRevenue: 45800000,
        pendingExams: 23,
      },
    })
  }

  if (url === '/dashboard/charts/revenue') {
    return Promise.resolve({
      success: true,
      data: [
        { month: '1월', revenue: 32000000 },
        { month: '2월', revenue: 28000000 },
        { month: '3월', revenue: 35000000 },
        { month: '4월', revenue: 41000000 },
        { month: '5월', revenue: 39000000 },
        { month: '6월', revenue: 45800000 },
      ],
    })
  }

  if (url === '/dashboard/charts/access') {
    return Promise.resolve({
      success: true,
      data: [
        { date: '06/13', count: 320 },
        { date: '06/14', count: 410 },
        { date: '06/15', count: 380 },
        { date: '06/16', count: 450 },
        { date: '06/17', count: 520 },
        { date: '06/18', count: 490 },
        { date: '06/19', count: 560 },
      ],
    })
  }

  if (url === '/dashboard/charts/enrollment') {
    return Promise.resolve({
      success: true,
      data: [
        { name: '리더십', value: 320 },
        { name: '직무교육', value: 280 },
        { name: '법정의무', value: 190 },
        { name: '신입교육', value: 150 },
        { name: '기타', value: 90 },
      ],
    })
  }

  return null
}
