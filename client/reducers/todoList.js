const reducer = (state = [], action) => {
  let newState
  switch (action.type) {
    case "GET_TODO":
      return action.todo

    case "ADD_TODO":
      newState = [...state]
      let newTodo = newState.push(action.todo)
      return newState

    case "CHECK_TODO":
      newState = [...state]
      let checktodo = newState.filter((todos) => {
        return todos.id == action.todo.id
      })
      checktodo.completed = action.completed
      return newState

    case "DEL_TODO":
      newState = [...state]
      let deleteTodo = newState.filter((todos) => {
        return todos.todo != action.todo.todo
      })
      return deleteTodo

    case "DEL_ALL_TODO":
      newState = [...state]
      let deleteAllTodo = newState.filter((todos) => {
        return (
          todos.completed ==
          action.todo.filter((complete) => {
            return complete == true
          })
        )
      })
      return deleteAllTodo
    case "UPDATE_TODO":
      newState = [...state]
      let changeTodo = newState.filter((todos) => {
        return todos.id == action.todo.id
      })
      changeTodo.todo = action.todo
      return newState

    default:
      return state
  }
}

export default reducer
