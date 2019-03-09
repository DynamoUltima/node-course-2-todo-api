//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB Server')
    }
    console.log('Connected To MongoDb Server');

//  db.collection('Todos').findOneAndUpdate({
//      _id: new ObjectID('5c8376a96e6041c16c8a42e0')
//  },{
//      $set:{
//          completed:false
//      }
//  },{
//      returnOriginal:false
//  }).then((result)=>{
//      console.log(result);
//  })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c7fcc0363d6385d9867c28f')
    }, {
            $set: {
                name:'Dynamo'
            },
            $inc:{
                age:1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })


    
})