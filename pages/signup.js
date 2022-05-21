import { useRouter } from 'next/router'
import { useSignUpEmailPassword } from "@nhost/react";
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa'
import { Group, Title, Text, Container, Input, SimpleGrid } from '@mantine/core';
import { useState } from 'react'
import { Button, Stack } from '@mantine/core';
import { NextLink } from '@mantine/next';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    signUpEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error
  } = useSignUpEmailPassword()

  const router = useRouter();
  const GITHUB_LOGIN = `${process.env.NEXT_PUBLIC_NHOST_BACKEND}/v1/auth/signin/provider/github`;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUpEmailPassword(email, password, {
        displayName: displayName
      })
    } catch (err) {
      console.error(err);
    }

    router.push('/')
  }

  return (
      <Group position="apart" style={{ width: "100%" }} direction='column' align='center'>
        <Title order={1}>Register</Title>
        <form onSubmit={handleSubmit}>
          <Stack mt="xs" style={{ width: "500px" }}>
            <Input type="text" value={displayName} onChange={(e) => { setDisplayName(e.target.value) }} autoFocus placeholder="Name" />
            <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} autoFocus placeholder="Email" />
            <Input style={{ width: "100%" }} type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} autoFocus placeholder="Password" />
          </Stack>
          <Group mt="sm" position="center">
            <Button color="green" type="submit">Login</Button>
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
        <Text mt={20}>Already have an acount? <NextLink href="/login">Click here to log in</NextLink></Text>
      </Group>
  )
};
export default Signup;