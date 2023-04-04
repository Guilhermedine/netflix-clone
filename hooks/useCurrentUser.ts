import useSMR from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSMR('/api/current', fetcher)
  return { data, error, isLoading, mutate }
}

export default useCurrentUser
