import { SET_AUTHED_USER } from '../actions/authedUser'

const auth = (store) => (next) => (action) => {
  if (
    action.type === SET_AUTHED_USER
  ) {
    let usernames = new Array();
    usernames[0] = "erwan";
    usernames[1] = "root";

    let passwords = new Array();
    passwords[0] = "nemesis";
    usernames[1] = "root";

    let username = prompt("Please enter your username");
    let password = prompt("Please enter your password");


    if (usernames.indexOf(username) != -1) {
      if (passwords[usernames.indexOf(username)] == password) {
        alert("password correct");
      }
    } else {
      alert("wrong username or pass");
      return store
    }

  }
  return next(action)
}

export default auth
