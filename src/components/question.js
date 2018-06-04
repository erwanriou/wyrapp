import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {

  render() {
    const {question, users} = this.props
    return (
      <div className='question'>
        <p>Question 1</p>
        <p>Question 2</p>
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
