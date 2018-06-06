import React from 'react'
import { connect } from 'react-redux'

import Question from './Question.js'

class Dashboard extends React.Component {
  render() {
    const { questionsIds, answeredIds } = this.props
    return (
      <div className='dashboard'>
        <div className="filter">
          <h1>ANSWERED QUESTIONS</h1>
          <h1>UNANSWERED QUESTIONS</h1>
        </div>
        <ul>
          {answeredIds
            ? answeredIds.map(id =>
          (<li key={id}>
            {<Question id={id}/>}
          </li>))
            : null}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  const user = authedUser ? Object.values(authedUser) : null
  const answered = user ? users[user].answers : null
  return {
    answeredIds: answered ? Object.keys(answered) : null,
  }
}

export default connect(mapStateToProps)(Dashboard)
