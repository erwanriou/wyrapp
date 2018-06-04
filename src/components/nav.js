import React from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'

import { unSetAuthedUser } from '../actions/authedUser'

class Nav extends React.Component {

  handleLogOut= (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(unSetAuthedUser())
  }

  render() {
    const { user, users } = this.props
    return (
      <div className='nav'>
        <div className="links">
          <NavLink
            className='link'
            exact to='/leaderboard'>
            LeaderBoard
          </NavLink>
          <NavLink
            className='link'
            exact to='/dashboard'>
            Dashboard
          </NavLink>
          <NavLink
            className='link'
            exact to='/new'>
            Create Question
          </NavLink>
        </div>
        <div className="user-menu">
          <img src={users[user].avatarURL} alt={`Avatar of ${users[user].name}`}/>
          <p>{`Welcome ${users[user].name}`}</p>
          <button
            onClick={this.handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }){
  // we are importing the value of the authedUser to insert in the users object key
  const user = Object.values(authedUser)
  return {
    users,
    user: user,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
