import { RECEIVE_USERS, UPDATE_USER_ANSWER } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'

export default function users (state = [], action) {

  const user = { ...state[action.authedUser] }
  const answer = action.answer
  const question = action.question

  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USER_ANSWER :
      return {
        ...state,
        [action.authedUser] : {
          ...user,
          answers: {
            ...user.answers,
            [action.id] : answer
          }
        }
      }
    case ADD_QUESTION :
      return {
        ...state,
        [question.author] : {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        }
      }
    default :
      return state
  }
}
