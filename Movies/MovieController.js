// Funcion Completa

const { query } = require("express");
const { json } = require("express/lib/response");
const model=require("./MovieModels")

//Añadir peliculas en el body a la BBDD

module.exports.CreateMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie)
}

//Todas las peliculas


module.exports.AllMovies = async (req,res)=>{
    const query={};
    if(req.query.title)query.title =req.query.title;
    const rest =await model.find(query);
    res.json(rest)
}