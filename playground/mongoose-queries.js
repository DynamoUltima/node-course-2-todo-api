const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todos')
const { ObjectID } = require('mongoDB')
const { User } = require('./../server/models/user')

// var id = '5c8b6febbb9e1e1834fec7b01';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos)
// })


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Id By Todos', todo)
// }).catch((e) => console.log(e))

User.findById('5c86ae4ab52f3729b06acce7').then((user) => {
    if (!user) {
        return console.log('Unable tofind user');
    }
    console.log(JSON.stringify(user,undefined,2))
}, (e) => {
    console.log(e)
})