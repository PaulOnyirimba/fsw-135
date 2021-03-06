const express = require('express');
const user = require('../models/user');
const authRouter = express.Router();
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
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
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      return res.status(201).send({ token, user: savedUser.withoutPassword() })
        })
    })
})
// Login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(!user || req.body.password !== user.password){
        res.status(403)
        return next(new Error('Invalid Credentials'))
      }
      user.checkPassword(req.body.password, (err, isMatch) => {
        if(err) {
            res.status(403)
            return next(new Error(failedLogin))
        }
        if(!isMatch) {
            res.status(403)
            return next (newError(failedLogin))
        }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(200).send({ token, user: user.withoutPassword()})
    })
  })
})




// find all
// comment.find((err, people) => {
//     if (err) return res.status(500).send(err)
//     return res.status(200).send(people);
// });

module.exports = authRouter