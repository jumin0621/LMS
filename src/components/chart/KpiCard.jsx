import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/utils/cn'

export function KpiCard({ title, value, unit, change, icon: Icon, className }) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="mt-2 text-2xl font-bold">
              {value}
              {unit && <span className="ml-1 text-sm font-normal text-muted-foreground">{unit}</span>}
            </p>
            {change && (
              <p className="mt-1 text-xs text-muted-foreground">{change}</p>
            )}
          </div>
          {Icon && (
            <div className="rounded-lg bg-primary/10 p-2.5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
