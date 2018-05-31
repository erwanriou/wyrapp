import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import '../style/reset.css'
import '../style/style.css'

import Question from './Question.js'


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <ul className="dashboard-list">
          {this.props.questionsIds.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(App)
