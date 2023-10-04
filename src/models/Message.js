const mongoose = require("mongoose")
const {mongo} = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    sentBy: {
        type: String,
        ref: "users"
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model("messages", messageSchema)
module.exports = Message;
