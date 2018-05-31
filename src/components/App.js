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
        <Question />
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(App)
