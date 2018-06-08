import React from 'react'
import { connect } from 'react-redux'

import User from './User.js'

class LeaderBoard extends React.Component {

  render() {
    const { users } = this.props
    return (
      <div className='leaderboard'>
        <h1>IN PRODUCTION</h1>
        <ul>
          {users.map(user => <li>{user.name}</li>)}
        </ul>

      </div>
    )
  }
}

function mapStateToProps ({ users, questions }) {
  const usersDisplay = Object.values(users)
  return {
    users: usersDisplay,
    questions,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
