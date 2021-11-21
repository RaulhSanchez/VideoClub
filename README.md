# VideoClub

***

## Introducción

Este proyecto es un Backend emulando el que puede tener una página como Netflix, HBO, etc en el que un usuario tiene que registrarse, acceder a un catálogo de películas. También se puede acceder como Administrador, que a parte de las funcionalidades del usario pude añadir películas al catálogo. El desarrollo se ha gestionado con MongoDB que es un sistema de base de datos NoSQL orientado a documentos,Mongoose es un O.D.M (Object Document Modeling) para MongoDB en NodeJs con el que podemos crear Schemas para tipado de datos, esquematizar, validar, crear métodos y middlewares. También se ha utilizado Robo 3T para comprobar que la arquitectura de la base de datos se realiza correctamente.

## Peliculas

En el apartado de películas se puede desde añadir películas nuevas,acceder al catalogo completo de películas, buscar una pelicula concreta con su título o por ID.
Además en caso de no encontrar la película deseada, aparecerán todas las disponibles.

Para añadir una película concreta, el código que se ha usado es el siguiente






     try{
        const movie = req.body
        await MovieModels.create(movie);
        res.json(movie);
    }catch{
        res.json({error:"erro"})
    }



En la primera parte del código creamos una constante que llamamos movie decimos que va a ser un nuevo modelo, al que en el body añadiremos los datos requereidos en el modelo.

Tras esto la pelicula se guardara con .create(movie) en la base de datos si los datos añadidos son los requereidos en el modelo y la respuesta será la propia película añadida en caso de estar todo correcto.

De no tener algo correcto entonces la función ira por el catch y mostrará que tenemos un error.

![](https://galactic-sunset-253797.postman.co/workspace/Peliculas~c25de9c3-6cc8-41a3-a249-4d3a3e170fe8/request/18036057-be4d24aa-97a3-450b-a1bb-f921f91ccbf2)

En el apartado de buscar película, en la URL, al escribir localhost:3000/movie se añaden en la query el title:"título de la pelicula" para acceder a una película concreta. Con esta parte del código conseguimos esto:




    const query={};
    if(req.query.title)query.title = req.query.title;
    const rest = await model.find(query);
    res.json(rest);



Es posible ralizar una busqueda de las películas por el ID de la base de datos como se muestra en el siguiente método:



    const query={};
    if(req.query.title)query.title = req.query.title;
    if(req.query.director)query.director = req.query.director;
    if(req.query.gender)query.gender = req.query.gender;
    const rest = await model.find(query);
    res.json(rest);



***

## Usuario

En el apartado del usuario se permite hacer desde un Login en la applicación,cambiar el nombre del usuari o eliminar la cuenta y todos los datos.

Es posible registrarse como nuevo usuario añadiendo los datos que se piden en el Schema por el body, de postan como ha sido el caso en esta aplicación.

Para ello se ha utilizado el siguiente método:


    const query={};
    if(req.query.title)query.title = req.query.title;
    if(req.query.director)query.director = req.query.director;
    if(req.query.gender)query.gender = req.query.gender;
    const rest = await model.find(query);
    res.json(rest);



Los datos requeridos en este caso son: 

1. Nombre
2. Rol (que por defecto es el de Usuario)
3. Email
4. Contraseña (mínimo 8 dígitos)


Para la funcionalidad de cambiar el nombre, se requiere añadir el cambio por el body con el siguiente método:


    try{
        const changeName = await UserModels.findByIdAndUpdate({_id:req.params.id},{name:req.body.name});
        console.log(changeName)
        res.send("El nombre se ha cambiado");
    }catch{
        res.send("error");
    } 


Por último, es posible eliminar los datos registrados en la base de datos de forma irreversible, por lo que una vez eliminados, el usuario tendrá que volver a rellenar todos los campos requeridos en el registro.




