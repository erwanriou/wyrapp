import React from 'react'
import { connect } from 'react-redux'

import Question from './Question.js'

class Dashboard extends React.Component {

  displayAnswers() {
    // function to display only answered question on each user conected
    const { answeredIds } = this.props
    return answeredIds
      ? answeredIds.map(id =>
        (<li key={id}>
          {<Question id={id}/>}
        </li>))
      : null
  }

  render() {
    return (
      <div className='dashboard'>
        <div className="filter">
          <h1
            onClick={() => {
              //set up a function to switch the unanswered to answered questions
            }}
            style={{fontWeight: this.props.answeredIds ? '500' : '100'}}>
            ANSWERED QUESTIONS
          </h1>
          <h1
            onClick={() => {
              //set up a function to switch the answered to unanswered questions
            }}
            style={{fontWeight: this.props.unansweredIds ? '500' : '100'}}>
            UNANSWERED QUESTIONS
          </h1>
        </div>
        <ul>
          {this.displayAnswers()}
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
