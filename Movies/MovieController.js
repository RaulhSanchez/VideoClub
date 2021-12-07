// Funcion Completa

const MovieModels = require("./MovieModels");
const model=require("./MovieModels")
const decryptUser = require("../Middleware/middleware")

//Añadir peliculas en el body a la BBDD

module.exports.CreateMovie = async (req,res)=>{
    try{
        const user = decryptUser.decryptoken(req.headers.token)
        const movie = req.body
        if(user ){
            await MovieModels.create(movie);
            res.json({movie:movie});
        }else{console.log("no estas registrado")}
    }catch{
        res.json({error:"error"})
    }
}

//Peliculas por titulo

module.exports.SearchMovieByTitle = async (req,res)=>{
    try{
        const query={};
        if(req.query.title)query.title = req.query.title;
        if(req.query.director)query.director = req.query.director;
        if(req.query.gender)query.gender = req.query.gender;
        const rest = await model.find(query);
        res.json(rest);
    }catch(error){
        res.status(400).json("No se ha encontrado ninguna película")
    }
}

// BUsqueda por ID

module.exports.SearchMovieById = async (req,res)=>{
    try{
    const result = await MovieModels.find({_id: req.params.id})
    res.json(result);
    }catch(error){
        res.status(400).json("No se ha encontrado ninguna película")
    }
}