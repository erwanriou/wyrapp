import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {

  render() {
    const { users } = this.props
    return (
      <table className='leaderboard'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Profile</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{users.indexOf(user) + 1}</td>
              <td>{user.name}</td>
              <td><img src={user.avatarURL} alt={`Avatar de ${user.name}`}/></td>
              <td>{user.questions.length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ users, questions }) {
  const usersDisplay = Object.values(users)

  return {
    users: usersDisplay.sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) -
      (Object.keys(a.answers).length + a.questions.length)
    ),
    questions,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
