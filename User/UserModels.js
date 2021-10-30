const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        role: "User",
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    pasword:{
        type: String,
        required: true,
       // minlength= 6
    }
})
module.exports = mongoose.model("User", userSchema)