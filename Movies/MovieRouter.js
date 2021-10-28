const router = require("express").Router(); // moddelwere para conectar rutas desde la app central
const { route } = require("express/lib/application");
const controller = require("./MovieController");


// Buscar pelicula por ID

/*
router.get("/movie",(req,res)=>{
    const SearchName=(name)=>{
        let search=[];
        for (let i = 0; i < movieArr.length; i++) {
            if(movieArr[i].includes(name)){
                search.push(movieArr[i]);
                console.log(i);
            }
            
        }
        console.log(search)
        return search;
    }
    if(req.query.find){res.json({search:SearchName(req.query.find)})}
    else{res.json({All: movieArr[req.params.id]})}
})*/

router.get("/",(req,res)=>res.json({All: movieArr[req.params.id]})) // Buscar por Id

router.post("/",controller.createMovie)

module.exports = router;