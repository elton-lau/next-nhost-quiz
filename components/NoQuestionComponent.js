import { Box, Button, Flex, Title, Group, Paper, Text } from '@mantine/core';
import React, { useState } from 'react';

const NoQuestion = () => {
  return <Paper style={{textAlign: 'center'}}>
    <Title order={1}>Sorry we don't have any questions!</Title>
    <Group position="center" mt={8}>
      <Text align="center">Click below to add questions for your friends!</Text>
    </Group>
    <Group position="center" mt={8}>
      <Button width="50%" component="a" href="/create">Create</Button>
    </Group>
  </Paper>
};
export default NoQuestion;