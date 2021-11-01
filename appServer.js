const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken")
const app=express();
const userRouter = require("./User/UserRouter");
const movieRouter = require("./Movies/MovieRouter");

//const res = require("express/lib/response");


mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Conectado a la base de datos"))
.catch(()=>console.error("No estas conenctado a la base de datos"))

app.use(express.json());

app.use("/movie", movieRouter); // Acceso a carpeta movie
app.use("/user", userRouter); // Acceso a carpeta user

// Iniciar servidor
app.listen(3000,()=>console.log("Servidor levantado en el puerto 3000"));


//const login = (req,res)=>{
    //const data = await 
    //User.find({}).populate("company").populate("invitetr");
    
    //comprobar que en la req tengo un mail + pass
    // si no lo tengo retorno error
    //busco al usuario que coincide con el mail
    //comparo la pass con la del usuario
    //si esta mal le mando a la mierda
    //si es ta bien genero un token
    //el token tendra el user._id y el rol
    //le mando el token
//}

/*const token = jwt.sign({fuserId: user_id,roleL user_role},"shhh") // codificar code
console.log(token)

try{
    const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MzU0OTUxMjh9.Jd79LN2acC93NZlO6eAnS-pfAyES61cdCwJ1_zlS9Mk","shhh");
    console.log(decoded)
}catch(e){
    res.json({message:"Token invalido"})
}*/


