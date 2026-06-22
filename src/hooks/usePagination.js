import { useState, useCallback } from 'react'
import { DEFAULT_PAGE_SIZE } from '@/utils/constants'

export function usePagination(initialSize = DEFAULT_PAGE_SIZE) {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(initialSize)

  const onPageChange = useCallback((nextPage) => {
    setPage(nextPage)
  }, [])

  const onSizeChange = useCallback((nextSize) => {
    setSize(nextSize)
    setPage(1)
  }, [])

  const reset = useCallback(() => {
    setPage(1)
  }, [])

  return { page, size, onPageChange, onSizeChange, reset }
}
