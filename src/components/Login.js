import React from 'react'
import { connect } from 'react-redux'

import User from './User.js'

class Login extends React.Component {
  render() {
    const { usersIds } = this.props
    return (
      <div className='login'>
        <h1>Choose your Geek !!</h1>
        <h2>* Yes, yes i draw them myself...*</h2>
        <ul>
          {usersIds.map(id =>
          (<li key={id}>
            {<User id={id} />}
          </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)
