const mongoose = require("mongoose");
const hash = require ("../Middleware/middleware");

const userSchema = new mongoose.Schema(
{
    name:{ type: String, required: true, trim: true, },
    role: { type: String, required: true, lowercase: true, },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un mail válido.']
    },
    password: {
        required: true,
        type: String,
        // minlength: 8, // colocar en el controlador
        set:hash.CreateHash
    },
})
module.exports = mongoose.model("User", userSchema)

