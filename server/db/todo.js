const connection = require('./connection')

function getAllTodos(db = connection){
    return db('todo').select()
}
function addTodo(todo, db = connection){
    return db('todo')
    .insert(todo)
}
function checkTodo(todo, db = connection){
    return db('todo')
    .where('id', todo.id )
    .update({completed: todo.completed})
}
function deleteTodo(todo, db = connection){
    console.log(todo)
    return db('todo')
    .where('todo', todo.todo )
    .delete(todo)
}
function deleteComplted(todo, db = connection){
    console.log(todo)
    return db('todo')
    .where('completed', true )
    .delete(todo)
}
module.exports={
    getAllTodos,
    addTodo,
    checkTodo,
    deleteTodo,
    deleteComplted  
}