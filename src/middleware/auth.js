import { SET_AUTHED_USER } from '../actions/authedUser'

const auth = (store) => (next) => (action) => {
  if ( action.type === SET_AUTHED_USER ) {
    // set up the password array
    let passwords = []
    passwords[0] = "root"
    let password = prompt("Please enter your password")
    // set up the condition on middleware
    if (passwords.indexOf(password) === -1) {
      alert("You are not a geek, get back to your social life!!!")
      return store
    }
  }
  return next(action)
}
export default auth
