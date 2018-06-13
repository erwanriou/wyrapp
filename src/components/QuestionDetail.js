import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter, Link, actuis } from 'react-router-dom'
import { FaHeartO, FaHeart, FaCommentO, FaChevronLeft } from 'react-icons/lib/fa';

import { handleAddQuestionAnswer } from '../actions/questions'

class QuestionDetail extends Component {

  displayDate(timestamp) {
    //function to format the timestamp
    const date = new Date(timestamp)
    const time = date.toLocaleTimeString('en-US')
    return date.toLocaleDateString() + ' | ' +  time.substr(0, 5) + time.slice(-2)
  }

  checkAnswerLength(option) {
    const { question } = this.props
    const totalLength = question.optionOne.votes.length + question.optionTwo.votes.length
    return  <p>
              {`${option.votes.length} vote(s) | ${option.votes.length*100/totalLength}%`}
            </p>
  }

  handleQuestionAnswer = (e) => {
    //function to import the answers selected to redux and the database
    e.preventDefault()
    const { dispatch, question, user } = this.props
    dispatch(handleAddQuestionAnswer({
      id: question,
      authedUser: user,
      answer: e.target.value,
    }))
  }

  checkAnswerByAuthed() {
    // function to check if the authedUser answered or not a question
    const { question, user } = this.props
    return user //checking if user is authed
            ?  question.optionOne.votes.includes(user.toString()) ||
               question.optionTwo.votes.includes(user.toString())
                ? <div className="question-choose">
                    <div className="question-option">
                      <p>{question.optionOne.text}</p>
                      {this.checkAnswerLength(question.optionOne)}
                    </div>
                    <div className="question-option">
                      <p>{question.optionTwo.text}</p>
                      {this.checkAnswerLength(question.optionTwo)}
                    </div>
                  </div>
                : <div className="question-choose">
                    <form
                      className='question-select-form'
                      onSubmit={this.handleQuestionAnswer}>
                      <select
                        defaultValue='Select an answer'
                        className='question-select'>
                        <option value='Select an answer' disabled hidden>Select an answer</option>
                        <option value={question.optionOne}>{question.optionOne.text}</option>
                        <option value={question.optionTwo}>{question.optionTwo.text}</option>
                      </select>
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
              : null
  }

  render() {
    const { author, users, question } = this.props
    return (
      <Fragment>
      { author === null
          ? <Redirect to='/login' />
          : <div className='question-detail-link'>
              <Link to='/dashboard'>
                <FaChevronLeft className='icon' />
                Back
              </Link>
              <div className='question-detail'>
                <div className="question-user">
                  <img src={users[author].avatarURL} alt={users[author].name}/>
                  <div className="question-name-date">
                    <p>{users[author].name}</p>
                    <p>{this.displayDate(question.timestamp)}</p>
                  </div>
                  <div className="question-social">
                    <FaHeartO className="icon"/>
                    <FaCommentO className="icon"/>
                  </div>
                </div>
                <div className="question-title">
                  <h1>WOULD YOU RATHER</h1>
                </div>
                {this.checkAnswerByAuthed()}
              </div>
            </div> }
      </Fragment>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  const questionId = questions[id]
  const user = authedUser ? Object.values(authedUser) : null

  return {
    id,
    author: questionId ? questionId.author : null,
    question: questionId,
    user: user,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))
