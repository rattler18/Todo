//import express from 'express';
const express = require('express');
// import cors from 'cors';
const cors = require('cors');
// import todoController from './controllers/todoController';
const todoController =  require("./controllers/todoController");

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

app.set('view engine','ejs').set('view options',{
    delimiter:'[]'
});

todoController(app);

let port =  process.env.PORT;
port = 3000;
if(port == null || port == '') port = 8000;

app.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
});