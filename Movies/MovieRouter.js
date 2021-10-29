const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const { route } = require("express/lib/application");
const controller = require("./MovieController");



// Buscar pelicula por ID



//router.get("/",(req,res)=>res.json({All: movieArr[req.params.id]})) // Buscar por Id

router.post("/",controller.createMovie) // Ruta para añadir peliculas en el body a la BBDD

router.get("/", controller.SearchMovie) // Buscar perlicula

module.exports = router;