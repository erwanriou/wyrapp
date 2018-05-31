import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {

  render() {
    return (
      <div>
        <h3>QUESTION TO SHOW</h3>
      </div>
    )
  }
}

export default connect()(Question)
