// Funcion Completa

const { query } = require("express");
const model=require("./UserModels");

//Añadir usuario en el body a la BBDD

module.exports.CreateUser = async (req,res)=>{
    const newUser = new model(req.body);
    if(newUser.roll === "user"){
        await newUser.save();
        res.json(newUser)   
    }else{res.send("Error no eres admin")}
}