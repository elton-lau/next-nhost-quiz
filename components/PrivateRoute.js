import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { Text } from '@mantine/core';

export function authProtected(Comp) {
  return function AuthProtected(props) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    if (isLoading) {
      return <Text>Checking Authentication</Text>
    }

    if (!isAuthenticated) {
      router.push('/login')
      return <Text>Redirecting</Text>
    }

    return <Comp {...props} />
  }
}