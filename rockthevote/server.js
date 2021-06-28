const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect('mongodb://localhost:27017/voteIssuesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
);

// API to handle authentification and pass all endpoints through API
app.use('/auth', require('./routes/authRouter.js'));

// Routes
// app.use("/authentication", require("./routes/authRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server listen
app.listen(9000, () => {
    console.log('server running')
})