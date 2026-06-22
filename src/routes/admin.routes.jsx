import { PlaceholderPage } from '@/pages/admin/PlaceholderPage'

export const adminRoutes = [
  // Member
  { path: 'members', element: <PlaceholderPage title="회원목록" phase="Phase 1" /> },
  { path: 'members/new', element: <PlaceholderPage title="회원등록" phase="Phase 1" /> },
  { path: 'members/approvals', element: <PlaceholderPage title="승인관리" phase="Phase 1" /> },
  { path: 'members/dormant', element: <PlaceholderPage title="휴면회원" phase="Phase 2" /> },

  // Course
  { path: 'courses', element: <PlaceholderPage title="과정목록" phase="Phase 1" /> },
  { path: 'courses/new', element: <PlaceholderPage title="과정등록" phase="Phase 1" /> },
  { path: 'courses/sessions', element: <PlaceholderPage title="차수관리" phase="Phase 2" /> },
  { path: 'courses/categories', element: <PlaceholderPage title="카테고리관리" phase="Phase 2" /> },

  // Lecture
  { path: 'lectures', element: <PlaceholderPage title="강의목록" phase="Phase 2" /> },
  { path: 'lectures/videos', element: <PlaceholderPage title="영상관리" phase="Phase 2" /> },
  { path: 'lectures/materials', element: <PlaceholderPage title="자료실" phase="Phase 2" /> },

  // Exam
  { path: 'exams', element: <PlaceholderPage title="시험목록" phase="Phase 2" /> },
  { path: 'exams/questions', element: <PlaceholderPage title="문제은행" phase="Phase 2" /> },
  { path: 'exams/assignments', element: <PlaceholderPage title="과제관리" phase="Phase 2" /> },

  // Survey
  { path: 'surveys', element: <PlaceholderPage title="설문목록" phase="Phase 2" /> },
  { path: 'surveys/results', element: <PlaceholderPage title="결과조회" phase="Phase 2" /> },

  // Board
  { path: 'boards/notices', element: <PlaceholderPage title="공지사항" phase="Phase 3" /> },
  { path: 'boards/faq', element: <PlaceholderPage title="FAQ" phase="Phase 3" /> },
  { path: 'boards/qna', element: <PlaceholderPage title="Q&A" phase="Phase 3" /> },

  // Statistics
  { path: 'statistics/learning', element: <PlaceholderPage title="학습통계" phase="Phase 3" /> },
  { path: 'statistics/completion', element: <PlaceholderPage title="수료통계" phase="Phase 3" /> },
  { path: 'statistics/revenue', element: <PlaceholderPage title="매출통계" phase="Phase 3" /> },
  { path: 'statistics/access', element: <PlaceholderPage title="접속통계" phase="Phase 3" /> },

  // System
  { path: 'system/admins', element: <PlaceholderPage title="관리자관리" phase="Phase 4" /> },
  { path: 'system/roles', element: <PlaceholderPage title="권한관리" phase="Phase 4" /> },
  { path: 'system/codes', element: <PlaceholderPage title="공통코드" phase="Phase 4" /> },
]
