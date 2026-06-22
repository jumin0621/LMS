import {
  Users,
  UserPlus,
  BookOpen,
  Award,
  DollarSign,
  FileWarning,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { PageHeader } from '@/components/common/PageHeader'
import { KpiCard } from '@/components/chart/KpiCard'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useFetch } from '@/hooks/useFetch'
import {
  getDashboardKpi,
  getRevenueChart,
  getAccessChart,
  getEnrollmentChart,
} from '@/api/dashboard.api'

const CHART_COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#8b5cf6']

function formatCurrency(value) {
  if (value >= 100000000) return `${(value / 100000000).toFixed(1)}억`
  if (value >= 10000) return `${Math.round(value / 10000).toLocaleString()}만`
  return value.toLocaleString()
}

export function DashboardPage() {
  const { data: kpi, loading: kpiLoading } = useFetch(getDashboardKpi, [])
  const { data: revenue, loading: revenueLoading } = useFetch(getRevenueChart, [])
  const { data: access, loading: accessLoading } = useFetch(getAccessChart, [])
  const { data: enrollment, loading: enrollmentLoading } = useFetch(getEnrollmentChart, [])

  if (kpiLoading) {
    return <LoadingSpinner className="py-32" size="lg" />
  }

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="SJM LMS 관리자 대시보드"
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <KpiCard title="전체회원수" value={kpi?.totalMembers?.toLocaleString()} icon={Users} />
        <KpiCard title="오늘가입자" value={kpi?.todaySignups} icon={UserPlus} change="전일 대비 +3" />
        <KpiCard title="진행중과정" value={kpi?.activeCourses} icon={BookOpen} />
        <KpiCard title="수료자수" value={kpi?.completions?.toLocaleString()} icon={Award} />
        <KpiCard
          title="월매출"
          value={formatCurrency(kpi?.monthlyRevenue)}
          unit="원"
          icon={DollarSign}
        />
        <KpiCard title="미응시시험" value={kpi?.pendingExams} icon={FileWarning} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">월별 매출</CardTitle>
          </CardHeader>
          <CardContent>
            {revenueLoading ? (
              <LoadingSpinner className="py-16" />
            ) : (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={revenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 10000}만`} />
                  <Tooltip formatter={(v) => [`${Number(v).toLocaleString()}원`, '매출']} />
                  <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">일별 접속자</CardTitle>
          </CardHeader>
          <CardContent>
            {accessLoading ? (
              <LoadingSpinner className="py-16" />
            ) : (
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={access}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="접속자"
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">과정별 수강현황</CardTitle>
          </CardHeader>
          <CardContent>
            {enrollmentLoading ? (
              <LoadingSpinner className="py-16" />
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={enrollment}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {enrollment?.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={CHART_COLORS[index % CHART_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
