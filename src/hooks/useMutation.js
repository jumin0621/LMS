import { useState, useCallback } from 'react'

export function useMutation(mutationFn) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const mutate = useCallback(
    async (variables) => {
      setLoading(true)
      setError(null)
      try {
        const result = await mutationFn(variables)
        return result?.data ?? result
      } catch (err) {
        setError(err)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [mutationFn],
  )

  return { mutate, loading, error }
}
