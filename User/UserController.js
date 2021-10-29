const { query } = require("express");
const model=require("./UserModels");


//Añadir usuario en el body a la BBDD

module.exports.createUser = async (req,res)=>{
    const newUser = new model(req.body);
    await newUser.save();
    res.json(newUser)
}