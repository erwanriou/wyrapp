import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import Question from './Question.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    // React statement for UI short term purpose (not necessary to use redux here)
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
      ? questionsIds
        .filter(id => !answeredIds.includes(id))
        .map(id =>
        (<li key={id}>
          {<Question id={id}/>}
        </li>))
      : null
  }

  render() {
    const { loading } = this.props
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: 'orange', height: '10px', bottom:'50%' }}/>
        { loading === 1
          ? null
          : <Fragment>
              <div className='dashboard'>
                <div className="filter">
                  <h1
                    onClick={this.handleToggleAnswers}
                    style={{fontWeight: !this.state.isToggle ? '500' : '100'}}>
                    UNANSWERED QUESTIONS
                  </h1>
                  <h1
                    onClick={this.handleToggleQuestions}
                    style={{fontWeight: this.state.isToggle ? '500' : '100'}}>
                    ANSWERED QUESTIONS
                  </h1>
                </div>
                <ul>
                  {this.state.isToggle ? this.displayAnswers() : this.displayUnanswers()}
                </ul>
              </div>
            </Fragment>}
        </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions, loadingBar }) {
  const user = authedUser ? Object.values(authedUser) : null
  const answered = user ? users[user].answers : null
  const questionsIds = Object.keys(questions)
  return {
    loading: loadingBar.default,
    answeredIds: answered
    ? Object.keys(answered)
      // sorting the answered questions by date
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    : null,
    questionsIds: questionsIds
      // sorting the unanswered questions by date
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Dashboard)
