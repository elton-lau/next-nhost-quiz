import { Button, AppShell, Header, Group, Center } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useAuthenticated } from "@nhost/react";



const AppContainer = ({ children }) => {
  const isAuthenticated = useAuthenticated()

  return (
    <AppShell
      styles={{ main: { background: "#fff", width: "100vh" } }}
      header={<Header height="8vh" p="md">
        {
          !isAuthenticated && (
            <Group height="100%">
              <NextLink href="/">
                <Button variant="subtle">Home</Button>
              </NextLink>
              <NextLink href="/login">
                <Button variant="subtle">Login</Button>
              </NextLink>
              <NextLink href="/signup">
                <Button variant="subtle">Sign Up</Button>
              </NextLink>
            </Group>
          )
        }
        {
          isAuthenticated && (
            <Group height="100%">
              <NextLink href="/">
                <Button variant="subtle">Home</Button>
              </NextLink>
              <NextLink href="/create">
                <Button variant="subtle">Create Question</Button>
              </NextLink>
              <NextLink href="/quiz">
                <Button variant="subtle">Take a Quiz</Button>
              </NextLink>
            </Group>
          )
        }

      </Header>}
    >
      <Center style={{ height: "80vh" }}>
      {children}
      </Center>
    </AppShell>
  )
};

export default AppContainer;