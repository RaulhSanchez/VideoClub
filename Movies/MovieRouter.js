const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const controller = require("./MovieController");
const controll = require("./MovieServices")
const jwt = require ("jsonwebtoken");


router.post("/add",controller.CreateMovie) // Ruta para añadir peliculas en el body a la BBDD
router.get("/get", controller.SearchMovieByTitle) // Buscar perlicula
router.get("/:id",controll.getMovie) // Buscar perlicula


module.exports = router;