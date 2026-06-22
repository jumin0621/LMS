import { Badge } from '@/components/ui/badge'
import { MEMBER_STATUS_LABEL } from '@/utils/constants'

const STATUS_VARIANT = {
  ACTIVE: 'success',
  INACTIVE: 'muted',
  PENDING: 'warning',
  DORMANT: 'danger',
}

export function StatusBadge({ status }) {
  return (
    <Badge variant={STATUS_VARIANT[status] || 'muted'}>
      {MEMBER_STATUS_LABEL[status] || status}
    </Badge>
  )
}
