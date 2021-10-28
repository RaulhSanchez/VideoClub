// Funcion Completa

const model=require("./MovieModels")

//Añadir peliculas en el body a la BBDD

module.exports.createMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie)
}

//Buscar por titulo e id

module.exports.SearchMovie = async (req,res)=>{
    const Search=(films)=>{
        let search =[];
        for (let i = 0; i < movieArr.length; i++){
            if(model.movieArr.includes(films)){
                
            }
        }
    }
}