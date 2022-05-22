import { gql } from "@apollo/client";

export const CREATE_NEW_QUESTION = gql`
  mutation create_new_question($question: String! $question_answers: question_answers_arr_rel_insert_input!) {
    insert_questions_one(object: {question: $question, question_answers: $question_answers}){
      id
      question
      created_at
      question_answers{
        answer
      }
    }
  }
`