const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose")
const app=express();
const movieRouter = require("./Movies/MovieRouter")

mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Conectado a la base de datos"))
.catch(()=>console.error("No estas conenctado a la base de datos"))

app.use(express.json());

app.use("/movie", movieRouter); // Acceso a carpeta movie
//app.use("/user"); // Acceso a carpeta user

// Iniciar servidor
app.listen(3000,()=>console.log("Servidor levantado en el puerto 3000"));