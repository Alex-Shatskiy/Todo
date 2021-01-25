  
import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteAllComplted} from '../actions'


function Footer(props){

  const getActive =()=>{
    return props.todoList.filter(todo=> todo.completed == 0).length
  }
  const getCompleted=()=>{
    return props.todoList.filter(todo=> todo.completed == 1).length
  }
  const checkForCompleted=()=>{
    let completed = props.todoList.filter(todo=> todo.completed == 1).length
    return completed = completed == 0 ? false:true
  }

  const deleteCompleted = () =>{
    let completed = props.todoList.filter(todo=> todo.completed == 1)
    props.dispatch(deleteAllComplted(completed))
  }


    return(
        <>
         <footer className="footer">
        <span className="todo-count"><strong>{getActive()}</strong> item left</span>
        <ul className="filters">
          <li>
              <NavLink exact to='/' activeclassname='selected' >All</NavLink>
          </li>
          <li>
          <NavLink exact to='/active'  activeclassname='selected' >Active</NavLink>
          </li>
          <li>
          <NavLink exact to='/completed'  activeclassname='selected' >Completed</NavLink>
          </li>
        </ul>
        {checkForCompleted()?
        <button className="clear-completed"  onClick={()=> deleteCompleted()}activeclassname='selected' >Clear completed({getCompleted()})</button>:
        <span className="clear-completed">No todos complted</span>
      }
      </footer>
        </>
    )
}


function mapStateToProps(globalState){
  return {
    todoList: globalState.todoList,
  }
}

export default connect(mapStateToProps)(Footer)