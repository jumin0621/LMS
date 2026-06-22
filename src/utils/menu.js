import {
  LayoutDashboard,
  BookOpen,
  Users,
  Video,
  FileText,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Settings,
} from 'lucide-react'

export const ADMIN_MENU = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard',
  },
  {
    id: 'course',
    label: 'Course Management',
    icon: BookOpen,
    children: [
      { label: '과정목록', path: '/admin/courses' },
      { label: '과정등록', path: '/admin/courses/new' },
      { label: '차수관리', path: '/admin/courses/sessions' },
      { label: '카테고리관리', path: '/admin/courses/categories' },
    ],
  },
  {
    id: 'member',
    label: 'Member Management',
    icon: Users,
    children: [
      { label: '회원목록', path: '/admin/members' },
      { label: '회원등록', path: '/admin/members/new' },
      { label: '승인관리', path: '/admin/members/approvals' },
      { label: '휴면회원', path: '/admin/members/dormant' },
    ],
  },
  {
    id: 'lecture',
    label: 'Lecture Management',
    icon: Video,
    children: [
      { label: '강의목록', path: '/admin/lectures' },
      { label: '영상관리', path: '/admin/lectures/videos' },
      { label: '자료실', path: '/admin/lectures/materials' },
    ],
  },
  {
    id: 'exam',
    label: 'Exam Management',
    icon: FileText,
    children: [
      { label: '시험목록', path: '/admin/exams' },
      { label: '문제은행', path: '/admin/exams/questions' },
      { label: '과제관리', path: '/admin/exams/assignments' },
    ],
  },
  {
    id: 'survey',
    label: 'Survey Management',
    icon: ClipboardList,
    children: [
      { label: '설문목록', path: '/admin/surveys' },
      { label: '결과조회', path: '/admin/surveys/results' },
    ],
  },
  {
    id: 'board',
    label: 'Board Management',
    icon: MessageSquare,
    children: [
      { label: '공지사항', path: '/admin/boards/notices' },
      { label: 'FAQ', path: '/admin/boards/faq' },
      { label: 'Q&A', path: '/admin/boards/qna' },
    ],
  },
  {
    id: 'statistics',
    label: 'Statistics',
    icon: BarChart3,
    children: [
      { label: '학습통계', path: '/admin/statistics/learning' },
      { label: '수료통계', path: '/admin/statistics/completion' },
      { label: '매출통계', path: '/admin/statistics/revenue' },
      { label: '접속통계', path: '/admin/statistics/access' },
    ],
  },
  {
    id: 'system',
    label: 'System',
    icon: Settings,
    children: [
      { label: '관리자관리', path: '/admin/system/admins' },
      { label: '권한관리', path: '/admin/system/roles' },
      { label: '공통코드', path: '/admin/system/codes' },
    ],
  },
]
