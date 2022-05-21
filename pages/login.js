import { useRouter } from 'next/router'
import { useSignInEmailPassword } from "@nhost/react";
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'
import { Group, Title, Text, Container, Input, SimpleGrid } from '@mantine/core';
import { useState } from 'react'
import { Button, Stack } from '@mantine/core';
import { NextLink } from '@mantine/next';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const GITHUB_LOGIN = `${process.env.NEXT_PUBLIC_NHOST_BACKEND}/v1/auth/signin/provider/github`;
  const {
    signInEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error
  } = useSignInEmailPassword()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInEmailPassword(email, password)
    } catch (err) {
      console.error(err);
    }

    router.push('/login')
  }

  return (
      <Group position="apart" style={{ width: "100%" }} direction='column' align='center'>
        <Title order={1}>Login</Title>
        <form onSubmit={handleSubmit}>
          <Stack mt="xs" style={{ width: "500px" }}>
            <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} autoFocus placeholder="Email" />
            <Input style={{ width: "100%" }} type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} autoFocus placeholder="Password" />
          </Stack>
          <Group mt="sm" position="center">
            <Button color="green" type="submit">Sign Up</Button>
            <NextLink href="/">
              <Button color="red">Go Back</Button>
            </NextLink>
          </Group>
        </form>
        <SimpleGrid cols={3}  mt="md">
          <Button leftIcon={<FaGoogle />}>Google</Button>
          <Button leftIcon={<FaGithub />} href={GITHUB_LOGIN} component="a">Github</Button>
          <Button leftIcon={<FaFacebook />}>Facebook</Button>
        </SimpleGrid>
        <Text mt={20}>Don't have an acount? <NextLink href="/signup">Click here to sign up</NextLink></Text>
      </Group>


  )
};
export default Login;