const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const { route } = require("express/lib/application");
const controller = require("./MovieController");


router.post("/",controller.CreateMovie) // Ruta para añadir peliculas en el body a la BBDD

router.get("/", controller.SearchMovieByTitle) // Buscar perlicula

//router.get("/", controller.SearchMovieById) // Buscar perlicula


module.exports = router;