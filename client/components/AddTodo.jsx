import React from 'react'
import { connect } from 'react-redux'
import { postTodo} from '../actions'

class AddTodo extends React.Component{
  state = {
    todo: ''
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value,
    })
    this.state.todo
  }

  handleSubmit = () => {
    this.props.dispatch(postTodo(this.state.todo))
    this.setState({
      todo: ''
    })
  }
  handleKeyDown = function (e, cb) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit()
    }
  };
  render(){
    return (
      <>
      <form onKeyDown={e => this.handleKeyDown(e)} >
        <input className="new-todo"  onChange={this.handleChange} placeholder="What needs to be done?" autoFocus={true} />
      </form>
      </>
      )
  }
}

export default connect()(AddTodo)
