const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD
});