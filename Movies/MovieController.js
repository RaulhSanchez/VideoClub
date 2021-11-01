// Funcion Completa

const { query } = require("express");
const { json } = require("express/lib/response");
const MovieModels = require("./MovieModels");
const model=require("./MovieModels")

//Añadir peliculas en el body a la BBDD

module.exports.CreateMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie);
}

//Peliculas por titulo

module.exports.SearchMovieByTitle = async (req,res)=>{
    const query={};
    if(req.query.title)query.title = req.query.title;
    if(req.query.director)query.director = req.query.director;
    if(req.query.gender)query.gender = req.query.gender;
    const rest = await model.find(query);
    res.json(rest);
}

// BUsqueda por ID

module.exports.SearchMovieById = async (req,res)=>{
    const result = await MovieModels.find({_id: req.params.id})
    res.json(result);
}