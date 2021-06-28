const mongoose = require('mongoose')
const Schema = mongoose.Schema


// comment schema
const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    comment_txt: {
        type: String,
        required: true
    },
    insert_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', commentSchema)