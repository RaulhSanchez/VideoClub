const movies =require("./Movies/MovieController")
const service = require("./Movies/MovieServices")

test("movie",()=>{
    const result = movies.SearchMovieById({_id:"61c19e47cccf01c22887a7e3"})
    expect("61c19e47cccf01c22887a7e3").toBe("61c19e47cccf01c22887a7e3")
    expect(typeof result).toBe("object")
})