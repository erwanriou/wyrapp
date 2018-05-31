import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import questions from './questions'
import users from './users'


export default combineReducers({
  questions,
  users,
  loadingBar: loadingBarReducer,
})
