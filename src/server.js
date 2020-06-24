const express = require('express');
//require('./config/db');

const app = express();

const port = 1200;


app.use(express.json());

app.get('/test', (req, res, next) => {
    res.json({
        msg: 'Ok'
    });
});

app.post('/signup', (req, res, next) => {
    let user = [];

    user.push({
        fullname: req.body.fullname,
        email: req.body.email,
        age: req.body.age
    });

    res.json({
        msg: 'Account created successfully!',
        user: user
    });
} );

app.listen(port, () => {
    console.log(`Sample app listenig on Port:${port}; I think I have a crush on Tabby`);
})