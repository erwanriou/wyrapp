import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'


import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option1: '',
      option2: '',
      Dashboard: false,
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(e) {
    this.setState({ option1: e.target.value });
  }

  handleChange2(e) {
    this.setState({ option2: e.target.value });
  }

  handleSubmit = (e) => {
    //function to create question and import to redux database
    const { option1, option2 } = this.state
    const { dispatch, author } = this.props
    e.preventDefault()
    dispatch(handleAddQuestion({
      author: author.toString(),
      optionOneText: option1,
      optionTwoText: option2,
    }))
    //reset the form and return to dashboard
    this.setState({
      option1: '',
      option2: '',
      Dashboard: true,
    });
  }

  render() {
    const { option1, option2, Dashboard } = this.state
    if (Dashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div className='add-question'>
        <h1>WOULD YOU RATHER</h1>
        <form
          className='create-question'
          onSubmit={this.handleSubmit}>
          <p>Option 1</p>
          <input
            className='options'
            placeholder='try to write something very nerdy here'
            value={option1}
            onChange={this.handleChange1}
            type="text"/>
          <p>Option 2</p>
          <input
            className='options'
            placeholder='try to be normal and write something boring here'
            value={option2}
            onChange={this.handleChange2}
            type="text"/>
          <input
            className='submit-question'
            type="submit"
            disabled={option1 === '' || option2 === ''}/>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  const author = authedUser ? Object.values(authedUser) : null
  return {
    author,
  }
}

export default withRouter(connect(mapStateToProps)(AddQuestion))
