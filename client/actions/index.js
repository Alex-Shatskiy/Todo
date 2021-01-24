import request from 'superagent'

export const getTodoList =(todo) =>{
    return{
      type: 'GET_TODO',
      todo: todo
      }
  }

export const addTodo =(todo)=>{
  return{
    type:'ADD_TODO',
    todo:todo
  }
}


export const checkTodo =(todos)=>{
  return{
    type:'CHECK_TODO',
    todo:todos
  }
}

export const delTodo=(todo)=>{
  return{
    type:"DEL_TODO",
    todo:todo
  }
}

export const delAllTodo=(todo)=>{
  return{
    type:"DEL_ALL_TODO",
    todo:todo
  }
}


export const changeTodo=(todo)=>{
  return{
    type: "UPDATE_TODO",
    todo:todo
  }
}

export function getTodos(){
    return dispatch =>{
      return request
        .get('/api/v1/todo')
        .then(res =>{
          return dispatch(getTodoList(res.body))
        })
        .catch(err => {
          console.log(err)
       })
    }
  }

  export function postTodo(todo){
    const todoList ={todo: todo, completed: false}
    return dispatch=>{
      return request
      .post('/api/v1/todo')
      .send(todoList)
      .then(res=>{
        return dispatch(addTodo(todoList))
      })
      .catch(err => {
        console.log(err)
     })
    }
  }

  export function updateTodo(todos){
    return dispatch=>{
      return request
      .patch('/api/v1/todo')
      .send(todos)
      .then((res) => {
        return dispatch(getTodos())
      })
      .catch(err => {
        console.log(err)
     })
    }
  }

  export function deleteTodo(todo){
    return dispatch=>{
      return request
        .del('/api/v1/todo')
        .send(todo)
        .then(res=>{
        return dispatch(delTodo(todo))
      })
      .catch(err => {
        console.log(err)
     })
    }
  }

  export function deleteAllComplted(completed){
    return dispatch=>{
      return request
        .del('/api/v1/todo/delete')
        .send(completed)
        .then(res=>{
        return dispatch(delAllTodo(completed))
      })
      .catch(err => {
        console.log(err)
     })
    }
  }

  export function updateTodoTask(todo){
    return dispatch=>{
      return request
      .patch('/api/v1/todo/update')
      .send(todo)
      .then(res =>{
        return dispatch(changeTodo(todo))
      })
      .catch(err => {
        console.log(err)
     })
    }
  }