import React from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends React.Component {

  render() {
    return (
      <div className='add-question'>
        <h1>IN PRODUCTION</h1>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions }, props) {
  const { id } = props.match.params
  return {
    id
  }
}

export default connect(mapStateToProps)(QuestionDetail)
