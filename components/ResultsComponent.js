
import { Paper, Title } from '@mantine/core';


const Results = ({score, numofQuestions}) => {
  return <Paper>
    <Title mb={8} order={1}>Results</Title>
    <Title order={3}>The results are in! You scored {score} out of {numofQuestions}</Title>
  </Paper> 
};
export default Results;