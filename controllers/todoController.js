//import Todo from '../model/todo';
const Todo = require('../model/todo');

module.exports = (app)=>{
    app.get('/todo', (req, res, next) => {
        Todo.find({}, (err, Data) => {
            if (err) return console.error.bind(console, 'This Read Error Occurred : ');
            res.render('todo', {
                data:Data
            });
        });
    });

    app.post('/todo', (req, res, next) => {
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
            const todo = new Todo({
                    item: chunk.toString()
                });
            todo.save((err, todo, numAffected) => {
                if (err) return console.error.bind(console, 'This Connection Error Occurred : ');
                console.log(todo);
            });
        });
    });

    app.delete('/todo/:item', (req, res, next) => {
        Todo.deleteOne({item:req.params.item},(err)=>{
            if (err) return console.error.bind(console, 'This Connection Error Occurred : ');
            console.log('Item Deleted SuccessFully !');
        });
        res.send("finished");
    });
};