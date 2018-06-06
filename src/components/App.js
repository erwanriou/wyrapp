import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared'

import '../style/reset.css'
import '../style/style.css'


import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import QuestionDetail from './QuestionDetail'


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
              <Route
                exact path='/leaderBoard'
                component={LeaderBoard}
              />
              <Route
                exact path='/add'
                component={AddQuestion}
              />
              <Route
                exact path='/questions/:id'
                component={QuestionDetail}
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
