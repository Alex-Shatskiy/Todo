  
import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'


function Footer(props){
    return(
        <>
         <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
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
        <button className="clear-completed"  activeclassname='selected' >Clear completed</button>
      </footer>
        </>
    )
}

export default Footer