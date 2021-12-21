const { decryptoken } = require("../Middleware/middleware")
const controller = require("./MovieController")

module.exports.getMovie= async (req,res) => {
    try{
        const data = await controller.SearchMovieById(req.params.id)
        res.json(data)
    }catch{
        console.log("error")
    }
}

module.exports.CreateMovie = async (req,res) => {
    try{
        const user = decryptoken.decryptoken(req.header.token)
        const data = await controller.CreateMovie(req.body)
        res.json({data:movie})
    }catch{
        console.log("error")
    }
}