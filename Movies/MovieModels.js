const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: {type: String},
    director: {type: String},
    gender: {type: String},
})
module.exports = mongoose.model("Movie", movieSchema)

// Array de peliculas

module.exports.movieArr=[
    {
        id:01,
        nombre:"Rey Leon",
        genero:"animacion"
    },
    {
        id:02,
        nombre:"El señor de los anillos",
        genero:"accion"
    },
    {
        id:03,
        nombre:"El exorcista",
        genero:"terror"
    },
]