var express = require('express')
var bodyParser = require('body-parser')


var { mongoose } = require('./db/mongoose')

var { Todo } = require('./models/todos');
var { User } = require('./models/user');
const { ObjectID } = require('mongoDB')




var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })



    // todo.save().then((doc)=>{
    //     res.send(doc)
    // },(e)=>{
    //     res.status(400).send(e);
    // })



    var anotherTodo = new Todo({
        text: req.body.text
    })
    anotherTodo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })

})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    })
}, (e) => {
    res.status(400).send(e)
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();

    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })

})

app.listen(port, () => {
    console.log(`started at port ${port}`)
})

module.exports = { app };
