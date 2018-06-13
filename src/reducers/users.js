import { RECEIVE_USERS, UPDATE_USER_ANSWER } from '../actions/users'

export default function users (state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USER_ANSWER :
      const user = {...state[action.authedUser]};
      const answer = action.answer;

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
    default :
      return state
  }
}
