
import React from 'react'
import { connect } from 'react-redux'
import EachTodo from './EachTodo'

class  AllTodos extends React.Component {
    render(){
      return (
        <>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className='todo-list'>
          {this.props.todoList.map((todo, i) =>{
            return (
              <EachTodo key={i} todo={todo}/>
          )  
        })}
        </ul>
        </>
      )
    }
  }
  function mapStateToProps (globalState) {
    return {
      todoList: globalState.todoList,
    }
  }
  export default connect(mapStateToProps)(AllTodos)
