const express = require('express');
const user = require('../models/user');
const authRouter = express.Router();
// const Authentication = require('../models/comment.js')



// Signup
authRouter.post('signup', (req, res, next) => {
    user.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            console.log(username)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("username is already taken"))
        }
        const newUser = new user(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
        })
    })
})






// find all
// comment.find((err, people) => {
//     if (err) return res.status(500).send(err)
//     return res.status(200).send(people);
// });

module.exports = authRouter