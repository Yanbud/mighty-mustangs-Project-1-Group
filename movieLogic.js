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

var movieList = ["Predator", "The Green Mile", "I,Robot", "The Giver", "Scream 4",
    "The Conjuring", "The Conjuring 2", "Annabelle", "Annabelle: Creations",
    "The Conjuring: The Devil Made Me Do It", "The Nun", "Annabelle Comes Home",
    "The Curse of La Llorona", "28 Days Later", "28 Weeks Later", "The Grudge",
    "The Gallows", "The Rite", "Incarnate", "Eternals", "Iron Man",
    "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers",
    "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier",
    "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War",
    "Doctor Strange", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming",
    "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp",
    "Captain Marvel", "Avengers: Endgame", "Spider-Man: Far From Home", "The Waterboy",
    "Big Daddy", "Happy Gilmore", "Horrible Bosses", "Horrible Bosses 2", "Mr. Deeds",
    "Our Idiot Brother", "The Benchwarmers", "I Am Sam", "The Dig",
    "The Last Duel", "King Richard", "tick, tick...BOOM!", "Rush", "Cherry",
    "Marriage Story", "Steve Jobs", "The Theory of Everything",
    "The Longest Yard", "Billy Madison", "You Don't Mess with the Zohan",
    "Little Nicky", "The Matrix", "Step Brothers", "I Am Legend", "Shutter Island",
    "The Social Network", "Fast and Furious", "Free Guy", "The Suicide Squad", "Luca", "Mortal Kombat",
    "The Unholy", "Sonic the Hedgehog 2", "Nobody", "Deadpool", "Deadpool 2", "Sonic the Hedgehog",
    "Ted", "Ted 2", "Toy Story", "Toy Story 2", "Toy Story 3", "Toy Story 4", "House of Gucci",
    "Shrek", "Venom", "The Wolf of Wall Street", "Fatherhood"]
//Movie 1
function getRandomMovie1() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'https://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            movieImage1.src = data.Poster
            movieTitle1.textContent = data.Title

        })
}
getRandomMovie1()
//Movie 2
function getRandomMovie2() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'https://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            movieImage2.src = data.Poster
            movieTitle2.textContent = data.Title

        })
}
getRandomMovie2()
//Movie 3
function getRandomMovie3() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'https://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            movieImage3.src = data.Poster
            movieTitle3.textContent = data.Title

        })
}
getRandomMovie3()
//Movie 4
function getRandomMovie4() {
    var randomIndex = Math.floor(Math.random() * movieList.length);
    var movieName = movieList[randomIndex]
    var movieUrl = 'https://www.omdbapi.com/?t=' + movieName + '&apikey=21149232'
    fetch(movieUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            movieImage4.src = data.Poster
            movieTitle4.textContent = data.Title

        })
}
getRandomMovie4()

var setMovies = function () {
    getRandomMovie1()
    getRandomMovie2()
    getRandomMovie3()
    getRandomMovie4()
}
randomMovieBtn.addEventListener("click", setMovies)


var getMoviePlot = function (titVal) {
    var requestUrl = 'https://www.omdbapi.com/?t=' + titVal + '&apikey=21149232';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            moviePlot.textContent = "";
            moviePlot.textContent = data.Plot;

            console.log(data.Plot)
        })

}
getMoviePlot()









//shutter island
//the suicide squad
//eternals
//avengers endgame
//rush
//nobody
//black panther
//little nicky
//captain marvel
//doctor strange
//the nun
//house of gucci
//thor
//predator
//deadpool
//happy gilmore
//horrible bosses 2
//the matrix
//guardiasn of the galaxcy vol.2
//sonic 2
//the conjuring
//step brothers
//the gallows
//the waterboy
//captain marvel
//the conjuring 2
//zohan
//love
//spiderman: homecoming
//free guy
//thor ragnarok
//venom
//ironman 2
//captain america the first avenger
//spider amn far from home 
//toy story
//i, robot
//antman
//toy story 4
//the conjuring the devil made me do it
//ther theory of everything
//fast and furious
//happy gilmore
//28 weeks later
//shrek
//king richard
//mr deeds
//luca
//the rite 
//wolf of wallstrewet
//the green mile
//scream 4
//guardians of the galaxy
//marriage story 
//averngers age of ultron
//28 days later
//the unholy
//tick, tick, boom
//ted
//the grudge
//toy story 2
//antman and the wasp
//captain america civil war
//the dig
//big daddy
//i am legend
//steve jobs
//incarnate
//the benchwarmers
//the curse of la llorona
//ironman 3
//the last duel
//ted 2
//ironman
//thor dark world
//deadpool 2
