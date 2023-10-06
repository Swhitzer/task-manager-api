const mongoose = require('mongoose');
const db = require('mongodb');
db.CreateUser()

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});