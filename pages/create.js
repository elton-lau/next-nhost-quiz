import { useMutation } from '@apollo/client';
import { Input, Paper, Title, Stack, Group, RadioGroup, Radio, Button, SimpleGrid } from '@mantine/core';
import React, { useState } from 'react';
import { authProtected } from '../components/PrivateRoute';
import { Center } from '@mantine/core';
import { NextLink } from '@mantine/next';


const Create = () => {
  const [questionForm, setQuestionForm] = useState({
    question: '',
    answer_1: '',
    answer_2: '',
    answer_3: '',
    answer_4: '',
    correct: ''
  })

  const handleInputChange = (event) => {
    const { target: { name, value } } = event
    setQuestionForm({...questionForm, [name]: value})
    console.log(questionForm)
  }

  return <Paper shadow="xl" p={50} withBorder> 
    <Stack align="center">
      <Title order={1}>Create a new Quiz Question!</Title>
      <form onSubmit={() => {}}>
      <Stack mt={20} spacing="xl">
        <Input type="text" name="question" placeholder="Enter your question" onChange={handleInputChange} value={questionForm.question} />
        <Group  mt={4}>
          <Input type="text" name="answer_1" placeholder="First answer" onChange={handleInputChange} value={questionForm.answer_1} />
          <Input type="text" name="answer_2" placeholder="Second answer" onChange={handleInputChange} value={questionForm.answer_2} />
          <Input type="text" name="answer_3" placeholder="Third answer" onChange={handleInputChange} value={questionForm.answer_3} />
          <Input type="text" name="answer_4" placeholder="Fourth answer" onChange={handleInputChange} value={questionForm.answer_4} />
        </Group>
        <Center mt={4}>
          <RadioGroup>
            <Radio name="correct" onChange={handleInputChange} value={questionForm.answer_1 ? questionForm.answer_1 : "answer_1"} label={questionForm.answer_1 ? questionForm.answer_1 : "answer_1"} />
            <Radio name="correct" onChange={handleInputChange} value={questionForm.answer_2 ? questionForm.answer_1 : "answer_2"} label={questionForm.answer_2 ? questionForm.answer_1 : "answer_2"} />
            <Radio name="correct" onChange={handleInputChange} value={questionForm.answer_3 ? questionForm.answer_1 : "answer_3"} label={questionForm.answer_3 ? questionForm.answer_1 : "answer_3"} />
            <Radio name="correct" onChange={handleInputChange} value={questionForm.answer_4 ? questionForm.answer_1 : "answer_4"} label={questionForm.answer_4 ? questionForm.answer_1 : "answer_4"} />
          </RadioGroup>
        </Center>
        <Group position='center' nowrap direction="row" grow>
          <Button color="green" type="submit" >Create question</Button>
          <NextLink href="/">
            <Button fullWidth color="red">Cancel</Button>
          </NextLink>
        </Group>
      </Stack>

    </form>
    </Stack>

  </Paper>
};

export default authProtected(Create);