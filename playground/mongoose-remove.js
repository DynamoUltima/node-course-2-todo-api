const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todos')
const { ObjectID } = require('mongoDB')
const { User } = require('../server/models/user')


// Todo.remove({}).then((result)=>{
//     console.log(result)
// })
// Todo.deleteMany({}).then((result) => {
//     console.log(result)
// })

// future findOneAndUpdate, findOneAndReplace or findOneAndDelete instead

// Todo.findOneAndRemove({ _id:'5c965eac81a4c319b4206703'}).then((todo)=>{

// })

Todo.findByIdAndRemove('5c965eac81a4c319b4206703').then((todo)=>{
    console.log(todo);
})