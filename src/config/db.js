const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbUrl = 'mongodb+srv://i-gim:12236645@mycluster.nioo8.gcp.mongodb.net/the-board?retryWrites=true&w=majority';

try {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }); 
} catch (err) {
    throw err;
}

mongoose.connection.on('connected', () => {
    console.log(`Database successfully connected to ${dbUrl}`);
});