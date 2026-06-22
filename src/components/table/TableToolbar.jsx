import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TableToolbar({ title, onCreate, createLabel = '신규등록' }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      {title && <h2 className="text-base font-semibold">{title}</h2>}
      {onCreate && (
        <Button onClick={onCreate}>
          <Plus className="h-4 w-4" />
          {createLabel}
        </Button>
      )}
    </div>
  )
}
