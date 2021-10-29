const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    title: {type: String},
    director: {type: String},
    gender: {type: String},
})
module.exports = mongoose.model("Movie", movieSchema)



