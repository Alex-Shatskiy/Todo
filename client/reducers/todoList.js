const reducer = (state = [], action) =>{
  let newState 
    switch(action.type){

      case 'GET_TODO':
        return action.todo

      case 'ADD_TODO':
        newState = [...state]
        let newTodo = newState.push(action.todo)
        return newState

      case 'CHECK_TODO':
        newState = [...state]
        let checktodo = newState.filter(todos =>{
          return todos.id == action.todo.id
        })
        checktodo.completed = action.completed
        return newState

        case 'DEL_TODO':
          newState = [...state]
          let deleteTodo = newState.filter(todos =>{
            return todos.todo != action.todo.todo
          })
          return deleteTodo

      default:
          return state
    }
}

export default reducer