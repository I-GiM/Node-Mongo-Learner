const express = require('express');
const bcrypt = require('bcryptjs');
const seats = require('./models/users');
require("./config/db");

const app = express();
app.use(express.json());
const port = 2000;

app.post('/register', async (req, res, next) => {
    const findUser = await seats.findOne({email: req.body.email});

    if (findUser) {
       return res.json({msg: 'Email already exists!'})
    }
    try {
        const password = req.body.password;
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                throw err
            } else {
                bcrypt.hash(password, salt, async (err, encPass) => {
                    if (err) {
                        throw err
                    } else {
                        const newUser = new seats({
                            fullname: req.body.fullname,
                            email: req.body.email,
                            password: encPass
                        })

                        const savedUser = newUser.save();

                        res.json({
                            msg: 'User saved successfully',
                            user: savedUser
                        })
                    }
                })
            }
        });
    } catch(err) {
        res.json({msg: err});
    }
});

app.listen(port, () => {
    console.log(`App listening on Port:${port}`)
})
