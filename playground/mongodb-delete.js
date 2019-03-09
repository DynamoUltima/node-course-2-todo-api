//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB Server')
    }
    console.log('Connected To MongoDb Server');

    //delete any
    // db.collection('Todos').deleteMany({text:'Eat launch'}).then((result)=>{
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({ text: 'Eat launch' }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneDelete({completed:false}).then((result) => {
        console.log(result);
    });



    
})