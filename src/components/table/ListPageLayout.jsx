export function ListPageLayout({ search, toolbar, table, pagination }) {
  return (
    <div className="flex flex-col gap-4">
      {search && (
        <div className="rounded-lg border border-border bg-card p-4">{search}</div>
      )}
      {toolbar}
      <div className="rounded-lg border border-border bg-card p-4">
        {table}
        {pagination}
      </div>
    </div>
  )
}
