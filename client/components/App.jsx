import React from 'react'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {getTodos,checkCompleted, deleteTodo}from '../actions'
import AllTodos from './AllTodos'
import Footer from './Footer'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getTodos())
  }

  


render () {

  const hideFooter=()=>{
    let checkForsTodos = this.props.todoList.length
    return checkForsTodos = checkForsTodos == 0 ? false:true
  }
  
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
            <Route exact path='/' component={AllTodos}/>
            <Route exact path='/:status' component={AllTodos}/>
        </section>
        <footer className="footer">
          {hideFooter()?<Footer/>: <>Welcome To My TODO App</>}
        </footer>
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


