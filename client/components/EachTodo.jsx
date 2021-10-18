import React, { useState } from "react"
import { connect } from "react-redux"
import { updateTodo, deleteTodo } from "../actions"
import Update from "./Update"

const EachTodo = (props) => {
  const [doubleClickEdit, setDoubleClickEdit] = useState(false)

  const updateTodoList = (todo) => {
    let check = todo
    check.completed = check.completed ? 0 : 1
    props.dispatch(updateTodo(check))
  }

  const removeTodo = (todo) => {
    props.dispatch(deleteTodo(todo))
  }

  function onDoubleClick() {
    setDoubleClickEdit(!doubleClickEdit)
  }

  return (
    <>
      <li className={props.todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={props.todo.completed}
            onChange={() => updateTodoList(props.todo)}
          />
          {!doubleClickEdit ? (
            <label onDoubleClick={() => onDoubleClick()}>
              {props.todo.todo}
            </label>
          ) : (
            <Update
              todo={props.todo.todo}
              fullTodo={props.todo}
              enter={onDoubleClick}
            />
          )}
          <button
            className="destroy"
            onClick={() => removeTodo(props.todo)}
          ></button>
        </div>
      </li>
    </>
  )
}
export default connect()(EachTodo)
