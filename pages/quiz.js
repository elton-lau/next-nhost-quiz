import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Text, Paper, Center, Button } from '@mantine/core';
import Question from '../components/QuestionComponent';
import Results from '../components/ResultsComponent';
import { GET_UNANSWERED_QUESTIONS, RESTART_QUIZ } from '@/utils/api';
import NoQuestion from '../components/NoQuestionComponent'
import { useMutation } from '@apollo/client';


const Quiz = () => {
  const {loading, data} = useQuery(GET_UNANSWERED_QUESTIONS)
  // const [restartQuiz] = useMutation("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showFinished, setShowFinished] = useState(false)
  const resetQuiz = async () => {
    try {
      await RESTART_QUIZ({})
      setCurrentIndex(0)
      setShowFinished(false)
      setScore(0)
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <Text>Loading...</Text>
  if (data && data.unanswered_questions.length > 0) {
    const {unanswered_questions} = data;
    const currentQuestion = unanswered_questions[currentIndex]
    const onNextClick = (selectedOption) => {
      const currentAnswers = currentQuestion.question_answers
      const answer = currentAnswers.find((answers) => answers.answer === selectedOption)
      if (answer.is_correct) {
        setScore(score + 1)
      }
      if (currentIndex + 1 > unanswered_questions.length - 1) {
        setShowFinished(true)
        return
      }
      setCurrentIndex(currentIndex + 1)
    }

    return (
      <Paper>
        { showFinished ? <Results score={score} numberOfQuestions={unanswered_questions.length} /> : 
        <Paper><Question onNextClick={onNextClick} quetion={currentQuestion} key={currentQuestion.id} /></Paper>}
        {
          showFinished ? <Center mt={8}>
            <Button variant="outline" onClick={resetQuiz}>Try Again</Button>
          </Center> : 
          <Text>{currentIndex + 1} / {unanswered_questions.length}}</Text>
        } 
      </Paper>
    )
  } else {
    return(
      <Paper>
        <Paper shadow="xs" p="md">
          <NoQuestion />
        </Paper>
      </Paper>
    )
  }

  
};
export default Quiz;