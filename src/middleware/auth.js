import { SET_AUTHED_USER } from '../actions/authedUser'

const auth = (store) => (next) => (action) => {
  if ( action.type === SET_AUTHED_USER ) {
    // set up the password array
    let passwords = new Array();
    passwords[0] = "root";
    let password = prompt("Please enter your password");
    // set up the condition on middleware
    if (passwords.indexOf(password) == -1) {
      alert("wrong password!");
      return store
    }
  }
  return next(action)
}

export default auth
