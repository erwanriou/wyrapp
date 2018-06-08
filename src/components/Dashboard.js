import React from 'react'
import { connect } from 'react-redux'

import Question from './Question.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggle: false }
    this.handleToggleQuestions = this.handleToggleQuestions.bind(this);
    this.handleToggleAnswers = this.handleToggleAnswers.bind(this);
  }

  handleToggleQuestions = (e) => {
    e.preventDefault()
    this.setState({isToggle: true})
  }

  handleToggleAnswers = (e) => {
    e.preventDefault()
    this.setState({isToggle: false})
  }

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

  displayUnanswers() {
    // function to display only unanswered question on each user conected
    const { questionsIds, answeredIds } = this.props
    return answeredIds
      ? questionsIds.filter(id => !answeredIds.includes(id)).map(id =>
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
            onClick={this.handleToggleAnswers}
            style={{fontWeight: !this.state.isToggle ? '500' : '100'}}>
            ANSWERED QUESTIONS
          </h1>
          <h1
            onClick={this.handleToggleQuestions}
            style={{fontWeight: this.state.isToggle ? '500' : '100'}}>
            UNANSWERED QUESTIONS
          </h1>
        </div>
        <ul>
          {!this.state.isToggle ? this.displayAnswers() : this.displayUnanswers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const user = authedUser ? Object.values(authedUser) : null
  const answered = user ? users[user].answers : null
  const questionsIds = Object.keys(questions)
  return {
    answeredIds: answered ? Object.keys(answered) : null,
    questionsIds: questionsIds,
  }
}

export default connect(mapStateToProps)(Dashboard)
