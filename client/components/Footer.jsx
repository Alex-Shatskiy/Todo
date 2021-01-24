  
import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteAllComplted} from '../actions'


function Footer(props){

  const getCompleted =()=>{
    return props.todoList.filter(todo=> todo.completed == 0).length
  }

  const deleteCompleted = () =>{
    let completed = props.todoList.filter(todo=> todo.completed == 1)
    props.dispatch(deleteAllComplted(completed))
  }

    return(
        <>
         <footer className="footer">
        <span className="todo-count"><strong>{getCompleted()}</strong> item left</span>
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
        <button className="clear-completed"  onClick={()=> deleteCompleted()}activeclassname='selected' >Clear completed</button>
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