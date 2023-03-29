const  { Router, response } = require('express');
const router = Router();
const { checkBody, checkParams} = require('../middleware/index')
const uuid = require('uuid-random')

let todos = [
    {todo: "Buy coffie", id: uuid(), done: false },
    {todo: "Buy cake", id: uuid(), done: false },
    {todo: "Brew the coffie", id: uuid(), done: false },
    {todo: "Drink the coffie", id: uuid(), done: false },
];

router.get('/', (req, res)=>{
    response.json({success: true, todos: todos})
});

router.post('/', checkBody, (req, res)=>{
    const { todo} = req.body
    const todoObj = {
        todo: todo,
        id: uuid(),
        done: fasle
    }
    todos.push(todoObj)

    const result = {
        success: true,
        todos: todos
    }

    res.json(result)
});

router.delete('/:id', checkParams, (req, res)=>{
    const id = req.params.id
    todos = todos.filter((todo)=>{
        if(todo.id !== id){
            return todo
        } 
    })
    const result = {
        success: true,
        todos: todos
    }
    res.json(result)

})

module.exports = router;

// uuid or nanoid in NPM 