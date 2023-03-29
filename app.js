const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT|| 8000;
const todoRouter = require('./routes/todoRoute')

app.use(express.json())

app.use('/api/todo', todoRouter)


app.listen(PORT, ()=>{
    console.log("Server Started")
})