import {saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function updateUserAnswer({qid, authedUser, answer}) {
  return {
    type: UPDATE_USER_ANSWER,
    id: qid,
    authedUser,
    answer,
  }
}

export function handleUpdateUserAnswer(info) {
  return dispatch => {
    dispatch(updateUserAnswer(info))
    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn("Error in handleAnswerQuestion")
        dispatch(updateUserAnswer(info))
        alert('There was an error answering this question')
      })
  }
}
