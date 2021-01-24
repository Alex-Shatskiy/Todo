
import React from 'react'
import { connect } from 'react-redux'
import EachTodo from './EachTodo'

function AllTodos(props){
      const pageStatus = ()=>{
        let urlStatus = props.match.params.status

         if(urlStatus == 'completed'){
          return props.todoList.filter(todo=>todo.completed == 1)
         }else if(urlStatus == 'active'){
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
