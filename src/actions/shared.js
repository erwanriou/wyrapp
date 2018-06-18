import { getInitialData } from '../utils/api'
import { receiveUsers, handleUpdateUserAnswer, handleUpdateUserQuestion } from '../actions/users'
import { receiveQuestions, handleAnswerQuestion, handleAddQuestion  } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

//here we fusion the both handdle update question and user since the value has to be updated in both parts in the database>
export function handleQuestionVote (info){
    return (dispatch) => {
      dispatch(showLoading())
      dispatch(handleUpdateUserAnswer(info))
      dispatch(handleAnswerQuestion(info))
      dispatch(hideLoading())
    }
}

//here we fusion the both handdle create question and user since the value has to be updated in both parts in the database>
export function handleCreateQuestion (info){
    return (dispatch) => {
      dispatch(showLoading())
      dispatch(handleAddQuestion(info))
      dispatch(handleUpdateUserQuestion(info))
      dispatch(hideLoading())
    }
}
