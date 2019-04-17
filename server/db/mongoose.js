var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//work around future deprecation >  mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
mongoose.connect(process.env.MONGOLAB_JADE_URI , { useNewUrlParser: true });

module.exports={mongoose};