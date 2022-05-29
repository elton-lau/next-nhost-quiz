import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Input, Paper, Title, Stack, Group, RadioGroup, Radio, Button, SimpleGrid } from '@mantine/core';
import { SUBMIT_ANSWER } from '@/utils/api';


const Question = ({question, onNextClick}) => {
  const [answered, setAnswered] = useState(false)
  const [selectedOption, setSelectedOption] = useState({})
  const [submitAnswer] = useMutation(SUBMIT_ANSWER)

  const onOptionClick = async(option) => {
    try {
      await submitAnswer({
        variables: {
          answer_id: option.id,
          question_id: question.id,
        }
      })
      setAnswered(true)
      setSelectedOption(option.answer)
    } catch (error) {
      console.error(error)
    }
  }

  const submiQuestion = () => {
    setAnswered(false)
    setSelectedOption({})
    onNextClick(selectedOption)
  }

  return <Paper>
    <Title order={1} textAlign="center">How many can you get right?</Title>
    <Paper mt={8}>
      <Title order={6} textAlign="center">Question: {question.question}</Title>
    </Paper>
    <Group position="center" grow mt={8}>
      {question.question_answers.map(option => {
        return <Button mt={4} mx="auto" width="50%" minWidth="150px" variant='outline' key={option.answer} onClick={() => onOptionClick(option)}>{option.answer}</Button>
      }) }
    </Group>
    {answered && (
      <Group mt={8} position="right">
        <Button width="25%" onClick={submiQuestion}></Button>
      </Group>
    )}
  </Paper>
};
export default Question;