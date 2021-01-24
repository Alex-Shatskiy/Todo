
import React from 'react'
import { connect } from 'react-redux'
import EachTodo from './EachTodo'

function AllTodos(props){
    console.log(props.match.params)
      const pageStatus = ()=>{
         if(props.match.params.status == 'completed'){
          return props.todoList.filter(todo=>todo.completed == 1)
         }else if(props.match.params.status == 'active'){
          console.log("props.ya")
          return props.todoList.filter(todo=>todo.completed == 0)
         }else{
           return props.todoList
         }
      }
      return (
        <>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className='todo-list'>
          {pageStatus().map((todo, i) =>{
            return (
              <EachTodo key={i} todo={todo}/>
          )  
        })}
        </ul>
        </>
      )
  }
  function mapStateToProps (globalState) {
    return {
      todoList: globalState.todoList,
    }
  }
  export default connect(mapStateToProps)(AllTodos)
