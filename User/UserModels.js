const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: { type: String, required: true, trim: true, },
    roll: { type: String, required: true, lowercase: true, },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    pasword: {
        required: true,
        type: String,
        minlength: 8
    },
})
module.exports = mongoose.model("User", userSchema)