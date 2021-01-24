import React from 'react'
import { connect } from 'react-redux'
import { updateTodoTask} from '../actions'

class Update extends React.Component{
    state = {
        todo: ''
    }

    handleChange = event => {
        this.setState({
            todo: event.target.value,
        })
    }
    

    handleSubmit = function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        let newEvent = this.props.fullTodo
        newEvent.todo = this.state.todo
        this.props.dispatch(updateTodoTask(newEvent))
        this.setState({ todo:''})
        this.props.enter()
    }
};
render(){
    return (
      <>
      <form onKeyDown={e => this.handleSubmit(e)} >
        <input className="new-todo" onChange={this.handleChange} placeholder={this.props.todo} autoFocus={true} />
      </form>
      </>
      )
  }
}

export default connect()(Update)