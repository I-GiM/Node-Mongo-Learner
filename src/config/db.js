const mongoose = require('mongoose');

// Use Promises
mongoose.Promise = global.Promise;

const dbURL = 'mongodb+srv://i-gim:Fuutonrasenshuriken#1@mycluster-nioo8.mongodb.net/the-board?retryWrites=true&w=majority';

try {
    mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopolgy: true});
} catch (err) {
    throw err;
}

mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${dbURL}`);
})