import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    case ANSWER_QUESTION :
      let newState = { ...state }
      newState[action.id][action.answer].votes.concat([action.authedUser])
      return newState
    default :
      return state
  }
}
