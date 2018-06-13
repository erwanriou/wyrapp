import { RECEIVE_USERS, UPDATE_USER_ANSWER } from '../actions/users'

export default function users (state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USER_ANSWER :
      let newState = { ...state }
      newState[action.authedUser.id].answers[action.id] = action.answer
      return newState
    default :
      return state
  }
}
