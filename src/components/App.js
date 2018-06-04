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

  //Fetching initial datas
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  //ternary operator on authedUser to define if the user is logged or not
  checkAuthedUser() {
    const { authedUser } = this.props
    return authedUser === null
      ? <Redirect to='/login' />
      : <div>
          <Nav />
          <Redirect to='/dashboard' />
        </div>
  }

  render() {
    const { loading } = this.props
    return (
      <Fragment>
        <LoadingBar />
        {/* Displaying content only if data is loaded */}
        { loading === 1
          ? null
          : <Fragment>
              {this.checkAuthedUser()}
              <Route
                exact path='/login'
                component={Login}
              />
              <Route
                exact path='/dashboard'
                component={Dashboard}
              />
          </Fragment>}
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, loadingBar }) {
  return {
    loading: loadingBar.default,
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(App))
