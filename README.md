# VideoClub

***

## Introducción

Este proyecto es un Backend emulando el que puede tener una página como Netflix, HBO, etc en el que un usuario tiene que registrarse, acceder a un catálogo de películas. También se puede acceder como Administrador, que a parte de las funcionalidades del usario pude añadir películas al catálogo. El desarrollo se ha gestionado con MongoDB que es un sistema de base de datos NoSQL orientado a documentos,Mongoose es un O.D.M (Object Document Modeling) para MongoDB en NodeJs con el que podemos crear Schemas para tipado de datos, esquematizar, validar, crear métodos y middlewares. También se ha utilizado Robo 3T para comprobar que la arquitectura de la base de datos se realiza correctamente.

## Peliculas

En el apartado de películas se puede desde añadir películas nuevas,acceder al catalogo completo de películas, buscar una pelicula concreta con su título o por ID.
Además en caso de no encontrar la película deseada, aparecerán todas las disponibles.

Para añadir una película concreta, el código que se ha usado es el siguiente:


...


module.exports.CreateMovie = async (req,res)=>{
    const movie = new model(req.body);
    await movie.save();
    res.json(movie);
}

...


En el que desde el body, añadiendo los requisitos necesarios como el título, el director y genero, se añade automáticamente a la base de datos y al resto de películas.


En el apartado de buscar película, en la URL, al escribir localhost:3000/movie se añaden en la query el title:"título de la pelicula" para acceder a una película concreta. Con esta parte del código conseguimos esto:



...


//Peliculas por titulo

module.exports.SearchMovieByTitle = async (req,res)=>{
    const query={};
    if(req.query.title)query.title = req.query.title;
    const rest = await model.find(query);
    res.json(rest);
}


...




