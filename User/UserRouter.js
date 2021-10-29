const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const { route } = require("express/lib/application");
const controller = require("./UserController");



router.post("/",controller.createUser) // Crear usuario

module.exports = router;
