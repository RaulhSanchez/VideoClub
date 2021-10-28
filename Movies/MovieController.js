// Funcion Completa

const model=require("./MovieModels")

module.exports.createMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie)
}