
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();
const jwt = require ("jsonwebtoken");
const userRoutes = require("./User/UserRouter");
const movieRoutes = require("./Movies/MovieRouter");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/videclub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a la BBDD.'))
    .catch((e) => console.log(e))

app.use('/user', userRoutes)
app.use('/movies', movieRoutes)


app.listen(process.env.PORT, () => console.log('Funcionando'))
console.log(process.env.PORT)