const router = require("express").Router(); 
const controller = require("./UserController");
const jwt = require ("jsonwebtoken");
const middleware = require("../Middleware/middleware");

router.get("/login",controller.login) // Logearse
router.get("/:id", controller.SearchUser)//Buscar por ID
router.post("/create",controller.CreateUser) // Crear usuario
router.delete("/delete",controller.DeleteUser) // Eliminar usuario
router.put("/:id",controller.ChangeName)


module.exports = router;
