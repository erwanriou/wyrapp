import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {

  render() {
    const {question, users} = this.props
    return (
      <div className='question'>
        <p>Question 1: {question.optionOne.text}</p>
        <p>Question 2: {question.optionTwo.text}</p>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, {id}) {
  const question = questions[id]
  return {
    users,
    question,
  }
}

export default connect(mapStateToProps)(Question)
