const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const moment = require("moment")


module.exports.CreateHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}
module.exports.CompareHash = (passwordPlane, userPass) => {

    let comparation = bcrypt.compareSync(passwordPlane, userPass)
    return comparation
}
module.exports.CreateToken = (user) => {
    const payload = {
        data: user._id,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }
    return jwt.sign(payload, process.env.PORT)
}

//Verificación

module.exports.VerifyToken = (req, res, next) => {
    try {
        jwt.verify(req.headers.authtoken, process.env.TOKEN)
        next()
    } catch (error) { res.json({error: 'Acceso denegado.'})
    }
}

module.exports.decryptoken = (user) => {
    let objectUser = jwt.decode(user)
    console.log(objectUser)
    console.log(objectUser+ 'decri')
    return objectUser
}
  