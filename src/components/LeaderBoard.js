import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {

  render() {
    return (
      <div className='leaderboard'>
        <h1>IN PRODUCTION</h1>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions }) {
  return {
    users,
    questions,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
