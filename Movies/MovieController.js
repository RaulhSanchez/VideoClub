// Funcion Completa

const { query } = require("express");
const model=require("./MovieModels")

//Añadir peliculas en el body a la BBDD

module.exports.createMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie)
}

//Buscar por titulo e id


module.exports.SearchMovie = async (req,res)=>{
    if(req.query.title) query.title = req.query.title;
    if(req.query.id) query.id = req.query.id;
    if(req.query.gender) query.gender = req.query.gender;
    const result = await model.find(query);
    res.json(result);
}