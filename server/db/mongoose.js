var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//work around future deprecation >  mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports={mongoose};