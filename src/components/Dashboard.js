import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav.js'
import Question from './Question.js'

class Dashboard extends React.Component {
  render() {
    const { questionsIds } = this.props
    return (
      <div className='dashboard'>
        <ul>
          {questionsIds.map(id =>
          (<li key={id}>
            {<Question id={id}/>}
          </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionsIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(Dashboard)
