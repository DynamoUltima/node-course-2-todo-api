//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj =new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB Server')
    }
    console.log('Connected To MongoDb Server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // db.collection('Users').insertOne({
        
    //     name: 'Joel',
    //     age: 23,
    //     location: 'Haatso'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
})