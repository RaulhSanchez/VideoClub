// Funcion Completa
const UserModels = require("./UserModels");
const hash = require ("../Middleware/middleware");


//Añadir usuario en el body a la BBDD

module.exports.CreateUser = async (req,res) => {
    try{
        const newUser = req.body;
        await UserModels.create(newUser)
        res.status(200).json({ user: newUser });    
    }catch(error){
        res.status(400).json({error:"400"});
    }
}

// LogIn de usuario

module.exports.login = async (req, res) => {
    try {
        const checkMail = await UserModels.findOne({ email: req.body.email })
        const checkPassword = hash.CompareHash(req.body.password, checkMail.password)
        if (checkPassword) {
            const data = hash.CreateToken(checkMail)
            res.json({ data: data })
        }else { res.send({ mensaje: '¡Error! Tu email o contraseña son incorrectos.' }) }
    }catch (error) { res.send({ mensaje: 'Tus datos son incorrectos: ${error}.' }) }
}

// Buscamos user.

module.exports.SearchUser = async (req, res) => {
    try {
        const searchById = await UserModels.find({ _id: req.params.id })
        res.json({ searchById })
    }catch (error) {
        res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.' })
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


