import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'

import '../style/reset.css'
import '../style/style.css'


import Dashboard from './Dashboard.js'
import Nav from './Nav.js'
import Login from './Login.js'


class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }


  render() {
    const { authedUser, loading } = this.props
    return (
      <Fragment>
        {/* ternary operator on authedUser to define if the user is logged or not*/}
        { authedUser === null
          ? <Redirect to='/login' />
          : <div>
              <Nav />
              <Redirect to='/dashboard' />
            </div>
          }
        <LoadingBar />
        {/* Displaying content only if data is loaded */}
        { loading === 1
          ? null
          : <div>
            <Route
              exact path='/login'
              component={Login}
            />
            <Route
              exact path='/dashboard'
              component={Dashboard}
            />
          </div>}
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions, loadingBar }) {
  return {
    loading: loadingBar.default,
    authedUser,
    users,
    questions,
  }
}

export default withRouter(connect(mapStateToProps)(App))
