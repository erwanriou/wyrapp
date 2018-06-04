import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <p>Navigation</p>
      </div>
    )
  }
}

export default connect()(Nav)
