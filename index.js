let api = "http://www.omdbapi.com/?apikey=6abcdf6f&t="
console.log(api);

function searchmovie(){
    let quary = document.getElementById("moviename").value;
    let search = api + quary;
    fetch(search) .then((response) =>{
            return(response.json());
    })
    .then ((response)=>{
        console.log(response);
        document.getElementById("title").innerHTML = response.Title;
        document.getElementById("desc").innerHTML = response.Plot;
        document.getElementById("gen").innerHTML = response.Genre;
        document.getElementById("act").innerHTML = response.Actors;
        document.getElementById("dir").innerHTML = response.Director;
        document.getElementById("wri").innerHTML = response.Writer;
        document.getElementById("boc").innerHTML = response.BoxOffice;
        document.getElementById("awa").innerHTML = response.Awards;
        document.getElementById("rat").innerHTML = response.imdbRating;
        document.getElementById("poster").src = response.Poster;
    })
}
