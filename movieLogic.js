var randomMovieBtn = document.querySelector('#random-movie')
var searchMovieBtn = document.querySelector('#movie-search')

var movieTitle1 = document.querySelector('#movie-title-1')
var movieTitle2 = document.querySelector('#movie-title-2')
var movieTitle3 = document.querySelector('#movie-title-3')
var movieTitle4 = document.querySelector('#movie-title-4')

var movieImages = [
    movieImage1 = document.querySelector('#movie-image-1'),
    movieImage2 = document.querySelector('#movie-image-2'),
    movieImage3 = document.querySelector('#movie-image-3'),
    movieImage4 = document.querySelector('#movie-image-4')
]

var moviePlot = document.querySelector('#movie-plot')

var movieList = ["Red Notice", "Predator", "The Green Mile", "I,Robot", "The Giver", "Scream 4",
    "The Conjuring", "The Conjuring 2", "Annabelle", "Annabelle: Creations",
    "The Conjusring: The Devil Made Me Do It", "The Nun", "Annabelle Comes Home",
    "The Curse of La Llorona", "28 Days Later", "28 Weeks Later", "The Grudge",
    "The Gallows", "The Rite", "Incarnate", "Eternals", "Iron Man",
    "Iron Man 2", "Thor", "Capitan America: The First Avenger", "Marvel's The Avengers",
    "Iron Man 3", "Thor: The Dark World", "Capitan America: The Winter Solider",
    "Guardians of the Galaxy", "Averngers: Age of Ultron", "Ant-Man", "Capitan America: Civil War",
    "Doctor Strange", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming",
    "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp",
    "Capitan Marvel", "Avengers: Endgame", "Spider-Man: Far From Home", "The Waterboy",
    "Big Daddy", "Happy Gilmore", "Horrible Bosses", "Horrible Bosses 2", "Mr. Deeds",
    "Our Idiot Brother", "The Benchwarmers", "I Am Sam", "The Dig",
    "The Last Duel", "King Richard", "Cherry", "tick, tick...BOOM!", "Rush",
    "Marriage Story", "Steve Jobs", "The Theory of Everything",
    "The Longest Yard", "Billy Madison", "Anger Managment", "You Don't Mess with the Zohan",
    "Little Nicky", "The Matrix", "Step Brothers", "I Am Legend", "Shutter Island",
    "The Social Network", "Fast and Furious", "Free Guy", "The Suicide Squad", "Luca", "Mortal Kombat",
    "The Unholy", "Sonic the Hedgehog 2", "Nobody", "Deadpool", "Deadpool 2", "Sonic the Hedgehog",
    "Ted", "Ted 2", "Toy Story", "Toy Story 2", "Toy Story 3", "Toy Story 4", "House of Gucci",
    "Shrek", "Venom", "Love & Other Drugs", "The Wolf of Wall Street", "Fatherhood", "" ]
//Movie 1
function getRandomMovie1() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            movieImage1.src = data.Poster
            movieTitle1.textContent = data.Title

        })
    movieList = movieList.filter(movie => {
        return movie !== movieName;
    })
    console.log(movieList)

}
//Movie 2
function getRandomMovie2() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            //Movie 1
            movieImage2.src = data.Poster
            movieTitle2.textContent = data.Title

        })
    movieList = movieList.filter(movie => {
        return movie !== movieName;
    })
    console.log(movieList)
}
//Movie 3
function getRandomMovie3() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            //Movie 1
            movieImage3.src = data.Poster
            movieTitle3.textContent = data.Title

        })
    movieList = movieList.filter(movie => {
        return movie !== movieName;
    })
    console.log(movieList)
}
//Movie 4
function getRandomMovie4() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            //Movie 1
            movieImage4.src = data.Poster
            movieTitle4.textContent = data.Title

        })
    movieList = movieList.filter(movie => {
        return movie !== movieName;
    })
    console.log(movieList)
}

var setMovies = function () {
    getRandomMovie1()
    getRandomMovie2()
    getRandomMovie3()
    getRandomMovie4()
}
randomMovieBtn.addEventListener("click", setMovies)

var getMoviePlot = function (titVal) {
    var requestUrl = 'http://www.omdbapi.com/?t=' + titVal + '&apikey=21149232';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //   var titVal = divEl.querySelector('div').textContent;     
            //   var element = event.target;

            //   var divEl = element.parentElement.parentElement;
            //   console.log(divEl);


           moviePlot.textContent = "";
            //   modalRecipeInstructions.textContent = data.meals[0].strInstructions;


            moviePlot.textContent = data.Plot;
            console.log(data.Plot)
        })

}