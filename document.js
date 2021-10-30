const express=require("express");
const app=express();
app.use(express.json());

// Iniciar servidor
app.listen(3000,()=>console.log("Servidor levantado en el puerto 3000"));

let movie=["Soy Leyenda", "El rey leon"]

app.get("/movie",(req,res)=>{
    const SearchMovie=(films)=>{
        let search=[];
        for (let i = 0; i < movie.length; i++) {    
            if(movie[i].includes(films)){
                search.push(movie[i]);
                console.log(i)
            }
        }
        console.log(search)
        return search
    }
    if(req.query.find){res.json({search: SearchMovie(req.query.find)})}
    else{res.json({All: movie[req.params.id]})}
})

const newName="";
const ChangeName=(movieArr,pos,newMovie)=>{
    movieArr[pos] = newMovie;
    console.log(newMovie)
    return newMovie;
}

app.put("/movie/:change",(req,res)=>{
    let result=ChangeName(movie,req.param.id)
    res.json({Result: result})
    console.log(result)
})


/*
app.delete("/movie/:id",(req,res)=>{
    const DeleteMovie=(film)=>{
        if(req.body.id){
            id= movie.length;
            let remove= id;
            remove=movie.splice(0,film)
            console.log(remove)
            return remove;
        }}
    DeleteMovie(movie);
    res.json({Remove: DeleteMovie(req.params.id)})
})
console.log(movie)*/

app.post("/movie/newMovie",(req,res)=>{
    const CreateMovie=(nMovie)=>{
        if(req.body.newFilm){
            let movieNew="";
            movieNew=nMovie;
            movie.push(nMovie);
        }return nMovie;
    }
    res.json({Pelicula: CreateMovie(req.body.newFilm)})
})

app.get("/movie/:id",(req,res)=>res.json({All: movie[req.params.id]}))
