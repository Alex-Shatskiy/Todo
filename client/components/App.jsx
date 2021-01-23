import React from 'react'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'

import {getTodos,checkCompleted, deleteTodo}from '../actions'
import AllTodos from './AllTodos'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getTodos())
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
          <AllTodos/>
        </section>
        <footer className="footer"></footer>
      </>
    )
  }
}
function mapStateToProps (globalState) {
  return {
    todoList: globalState.todoList,
  }
}
export default connect(mapStateToProps)(App)


