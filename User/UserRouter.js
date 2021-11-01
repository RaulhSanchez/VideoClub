const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const { route } = require("express/lib/application");
const controller = require("./UserController");



router.post("/",controller.CreateUser) // Crear usuario

router.get("/",controller.LogIn) // Logearse

router.delete("/",controller.DeleteUser) // Eliminar usuario

router.put("/",controller.ChangeName)

module.exports = router;
