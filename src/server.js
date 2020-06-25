const express = require('express');
require("./config/db");
const seats = require('./models/users');

const app = express();
app.use(express.json());
const port = 2000;

app.post('/register', async (req, res, next) => {
    try {
        const findUser = await seats.findOne({email: req.body.email});

        if (findUser) {
            return res.json({msg: 'Email already exists!'})
        }

        const newUser = new seats({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        });

        const savedUser = await newUser.save()

        res.json({
            msg: 'User saved successfully',
            user: savedUser
        })
    } catch(err) {
        res.json({msg: err});
    }
})

app.listen(port, () => {
    console.log(`App listening on Port:${port}`)
})
