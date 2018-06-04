import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

//import logger from './logger'
import auth from './auth'

export default applyMiddleware(
  thunk,
  //logger,
  auth,
)
