import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent } from '@/components/ui/card'

export function PlaceholderPage({ title, phase }) {
  return (
    <div>
      <PageHeader title={title} description={`${phase}에서 구현 예정입니다.`} />
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          <p className="text-lg font-medium">{title}</p>
          <p className="mt-2 text-sm">이 페이지는 {phase} 개발 단계에서 구현됩니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
