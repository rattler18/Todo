import mongoose from 'mongoose';

//Connect to the database
// mongoose.connect('mongodb://localhost/todo');
mongoose.connect('mongodb+srv://owofete:owofete100@rogueone-ar3wg.mongodb.net/test?retryWrites=true&w=majority');
//Check if the Connection was created Successfully
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'This Error Occurred : '));
db.once('open', ()=>{
    console.log('Connection Open');
});

const todoSchema = mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo',todoSchema);

export default Todo;