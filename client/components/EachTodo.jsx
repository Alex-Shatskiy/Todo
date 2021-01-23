import React from 'react'
import { connect } from 'react-redux'
import { updateTodo, deleteTodo } from '../actions'

function EachTodo(props){

  const updateTodoList =(todo)=>{
    let check = todo
    if(check.completed == true){
      check.completed = check.completed = 0
    }else{ 
      check.completed = check.completed = 1
    }
    props.dispatch(updateTodo(check))
  }

  const removeTodo=(todo)=>{
    props.dispatch(deleteTodo(todo))
  }

    return (
      <>
      <li className={props.todo.completed ? 'completed' : ''}>
        <div className='view'>
         <input className="toggle" type="checkbox" checked={props.todo.completed}  onChange={() => updateTodoList(props.todo)}/>
         <label>{props.todo.todo}</label>
         <button className="destroy" onClick={()=> removeTodo(props.todo)}></button>
        </div>
        </li>  
      </>
    )
}
export default connect()(EachTodo)