const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    title: {type: String},
    director: {type: String},
    gener: {type: String},
})
module.exports = mongoose.model("Movie", movieSchema)



