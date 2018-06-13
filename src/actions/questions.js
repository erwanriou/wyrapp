import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'SAVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion({id, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    answer,
  }
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))
    return saveQuestionAnswer(info)
     .catch((e) => {
         console.warn("Error in handleAnswerQuestion")
         dispatch(answerQuestion(info))
         alert('There was an error answering this question')
     })
  }
}


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
