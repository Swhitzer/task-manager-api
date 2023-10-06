const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    user: "Swhitzer",
    pass: "k7MPjp6D"
});