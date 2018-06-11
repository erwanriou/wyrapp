import React from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends React.Component {

  displayDate(timestamp) {
    //function to format the timestamp
    const date = new Date(timestamp)
    const time = date.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
  }

  render() {
    const { author, users, question } = this.props
    return (
      <div className='question-detail'>
        <div className="question-user">
          <img src={users[author].avatarURL} alt={users[author].name}/>
          <div className="question-name-date">
            <p>{users[author].name}</p>
            <p>{this.displayDate(question.timestamp)}</p>
          </div>
        </div>
        <div className="question-title">
          <h1>WOULD YOU RATHER</h1>
        </div>
        <div className="question-choose">
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions }, props) {
  const { id } = props.match.params
  const authorId = questions[id].author
  const questionId = questions[id]
  return {
    id,
    author: authorId,
    users,
    question: questionId,
  }
}

export default connect(mapStateToProps)(QuestionDetail)
