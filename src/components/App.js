import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'

import '../style/reset.css'
import '../style/style.css'


import Dashboard from './Dashboard.js'
import Login from './Login.js'


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }


  render() {
    const { authedUser } = this.props
    return (
      <Fragment>
        <LoadingBar />
        <Route
          exact path='/login'
          component={Login}
        />
        <Route
          exact path='/dashboard'
          component={Dashboard}
        />
        { authedUser === null
          ? <Redirect to='/login' />
          : <Redirect to='/dashboard' />}

      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)
