import express from 'express';
import cors from 'cors';
import todoController from './controllers/todoController';
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

app.listen(3000, ()=>{
    console.log("Server Started on Port 3000");
});