import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'SAVE_QUESTION'
export const ADD_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addQuestionAnswer({qid, authedUser, answer}) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info))
    return saveQuestionAnswer(info)
  }
}


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
