import React from 'react'
import { connect } from 'react-redux'
import { FaHeartO, FaHeart, FaCommentO } from 'react-icons/lib/fa';

class Question extends React.Component {

  render() {
    const { question } = this.props;
    return (
      <div className='question'>
        <div className="question-options">
          <h2>WOULD YOU LIKE?</h2>
          <p>{question.optionOne.text}</p>
          <h2>OR</h2>
          <p>{question.optionTwo.text}</p>
        </div>
        <div className="social-medias">
          <FaHeartO className="icon"/>
          <FaCommentO className="icon"/>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }, {id}) {
  const question = questions[id]
  return {
    question,
  }
}

export default connect(mapStateToProps)(Question)
