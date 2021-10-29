const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        role: "User",
    }
})
module.exports = mongoose.model("User", userSchema)