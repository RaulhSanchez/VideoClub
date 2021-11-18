const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const controller = require("./MovieController");
const jwt = require ("jsonwebtoken");


router.post("/add",controller.CreateMovie) // Ruta para añadir peliculas en el body a la BBDD
router.get("/get", controller.SearchMovieByTitle) // Buscar perlicula
router.get("/:id", controller.SearchMovieById) // Buscar perlicula


module.exports = router;