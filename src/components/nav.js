import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { unSetAuthedUser } from '../actions/authedUser'

class Nav extends React.Component {

  handleLogOut= (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    dispatch(unSetAuthedUser())
  }

  render() {
    const { users, authedUser } = this.props
    return (
      <div className='nav'>
        <p>{`bienvenu ${users.sarahedo.name}`}</p>
        <button
          onClick={this.handleLogOut}>
          Log Out
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }){
  return {
    users,
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
