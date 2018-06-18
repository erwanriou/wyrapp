import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'SAVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion ({ author, optionOneText, optionTwoText }) {
  return (dispatch, getState) => {

    return saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    }).then((question) => dispatch(addQuestion(question)))
  }
}

function answerQuestion({qid, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    qid,
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
