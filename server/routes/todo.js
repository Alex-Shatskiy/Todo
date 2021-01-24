  
const express = require('express')



const db = require('../db/todo')

const router = express.Router()

router.get('/', (req,res) =>{
    return db.getAllTodos()
    .then(todo =>{
        res.json(todo)
    })
})

router.post('/', (req,res) =>{
    return db.addTodo(req.body)
    .then(todo =>{
        res.json(todo)
    })
})

router.patch('/', (req,res) =>{
    return db.checkTodo(req.body)
    .then(todo =>{
        res.json(todo)
    })
})

router.delete('/', (req,res) => {
    return db.deleteTodo(req.body)
    .then(todo =>{
        res.json(todo)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Oh no delete error, todo not deleted' });
      })
})

router.delete('/delete', (req,res) => {
   return db.deleteComplted(req.body)
    .then(todo =>{
        res.json(todo)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Oh no delete error, todo not deleted' });
      })
})

router.patch('/update', (req,res) => {
    return db.updateTodoTask(req.body)
     .then(todo =>{
         res.json(todo)
     })
     .catch((err) => {
         console.log(err);
         res.status(500).json({ message: 'Oh no delete error, todo not deleted' });
       })
 })

module.exports = router