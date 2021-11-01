// Funcion Completa

const { query } = require("express");
const UserModels = require("./UserModels");


//Añadir usuario en el body a la BBDD

module.exports.CreateUser = async (req,res)=>{
    const newUser = new UserModels(req.body);
    if(newUser.roll === "user"){
        await newUser.save();
        res.json(newUser)   
    }else{res.send("Error no eres admin")}
}


// login

module.exports.LogIn = async (req,res)=>{
    try{
        const compareMail = await UserModels.findOne({email: req.body.email, pasword:req.body.pasword})   
        if(compareMail === null){
            res.send({result:"email o contraseña incorrecto"})
        }
        res.send({compareMail})       
    }catch{
        res.send({result:"not found"})
    }
}





// Cambiar nombre de usuario

module.exports.ChangeName = async (req,res)=>{
    try{
        const changeName = await UserModels.findByIdAndUpdate({_id:req.params.id},{name:req.body.name});
        console.log(changeName)
        res.send("El nombre se ha cambiado");
    }catch{
        res.send("error");
    }
    
    /*try{
        const newNAme = await UserModels.findOneAndReplace({name: req.body});
        if(newUser === null){
            res.send({result: "nombre no encontrado"})
        }
        res.send({newNAme})
    }catch{
        res.send({result:"not found"})
    }*/
}



// Eliminar usuario

module.exports.DeleteUser = async (req,res)=>{
    try{
        const deleteUser = await UserModels.deleteOne({email: req.body.email, pasword:req.body.pasword})  
        
        if(deleteUser === null){
            res.send({result:"email o contraseña incorrecto"})
        }
        res.send({})       
    }catch{
        res.send({result:"not found"})
    }
}


