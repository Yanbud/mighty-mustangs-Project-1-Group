$(document).ready(function() {
    $('.modal').modal();
});

$(document).ready(function() {
    $('.sidenav').sidenav();
});

var favFoodsEl = $('.fav-foods');
var favMoviesEl = $('.fav-movies');
var foodFormEl = $('#food-check');
var movieFormEl = $('#movie-check');

var myfood = $('.myfood');
var mymovie = $('.mymovie');
var closeBtn = $('#close-button');
var foodBlock = $('.icon-block');
var foodList = [];
var movieList = [];
// Food section
function displayFood() {
    favFoodsEl.innerHTML = '';
    for (var i = 0; i < foodList.length; i++) {
        var items = foodList[i];
        var div = document.createElement('div');
        div.setAttribute('data-index', i);
        div.setAttribute('class', 'img-block');
        var img = document.createElement('img');
        img.setAttribute('src', items.img);
        img.setAttribute('style', 'width:100px');

        var button = document.createElement('button');
        button.classList.add('material-icons', 'button-del')
        button.textContent = 'delete';

        var h2 = document.createElement('h2');
        h2.textContent = items.title;
        var day = new Date();
        var divDate = document.createElement('div');
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayName = days[day.getDay()];
        divDate.innerHTML = dayName + ' ( ' + day.getMonth() + 1 + '-' + day.getDate() + '-' + day.getFullYear() + ' )';
        divDate.classList.add('add-date')
        div.append(img, button, h2, divDate);
        favFoodsEl.append(div);
    }
}

function init() {
    var storedFood = JSON.parse(localStorage.getItem('foodList'));
    if (storedFood !== null) {
        foodList = storedFood;
    }
    displayFood();
    var storedMovie = JSON.parse(localStorage.getItem('movieList'));
    if (storedMovie !== null) {
        movieList = storedMovie;
    }
    displayMovie();
}

function setFood() {
    localStorage.setItem('foodList', JSON.stringify(foodList))
}

function handleFoodFav(event) {

    var element = event.target;
    if (element.matches('input') === true) {
        var divEl = element.parentElement.parentElement;
        var imgSrc = divEl.querySelector('img').getAttribute('src');
        var titVal = divEl.querySelector('h2').textContent;
        var recipe = {
            img: imgSrc,
            title: titVal
        }
        foodList.push(recipe);
        foodList.reverse();
        setFood();
        displayFood();
        favFoodsEl.textContent = '';
    }
}

function displayMod(event) {
    var element = event.target;
    var divEl = element.parentElement.parentElement;

    var imgSrc = divEl.querySelector('img').getAttribute('src');
    var titVal = divEl.querySelector('div').textContent;

    var img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    var h2 = document.createElement('h2');
    h2.textContent = titVal;

    var label = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');
    input.setAttribute('type', 'checkbox');
    span.textContent = 'Select the recipe as my food choice';
    label.append(input, span)

    foodFormEl.append(h2, img, label);
    myfood.textContent = '';

}

function removeFood(event) {
    var element = event.target;
    if (element.matches('button') === true) {
        var index = element.parentElement.getAttribute('data-index');
        foodList.splice(index, 1);
        element.parentElement.remove();
    }
    setFood();

}
init();

$('.fav-foods').children('div').on('click', removeFood);
foodBlock.on('click', displayMod);
foodFormEl.on('click', handleFoodFav);

// Movie section
function displayMovie() {
    favMoviesEl.innerHTML = '';
    for (var i = 0; i < movieList.length; i++) {
        var items = movieList[i];
        var div = document.createElement('div');
        div.setAttribute('data-index', i);
        div.setAttribute('class', 'img-block');
        var img = document.createElement('img');
        img.setAttribute('src', items.img);
        img.setAttribute('style', 'width:100px');

        var button = document.createElement('button');
        button.classList.add('material-icons', 'button-del')
        button.textContent = 'delete';

        var h2 = document.createElement('h2');
        h2.textContent = items.title;
        var day = new Date();
        var divDate = document.createElement('div');
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayName = days[day.getDay()];
        divDate.innerHTML = dayName + ' ( ' + day.getMonth() + 1 + '-' + day.getDate() + '-' + day.getFullYear() + ' )';
        divDate.classList.add('add-date')
        div.append(img, button, h2, divDate);
        favMoviesEl.append(div);
    }
}

function setMovie() {
    localStorage.setItem('movieList', JSON.stringify(movieList))
}

function handleMovieFav(event) {

    var element = event.target;
    if (element.matches('input') === true) {
        var divEl = element.parentElement.parentElement;
        var imgSrc = divEl.querySelector('img').getAttribute('src');
        var titVal = divEl.querySelector('h2').textContent;
        var movie = {
            img: imgSrc,
            title: titVal
        }
        movieList.push(movie);
        movieList.reverse();
        setMovie();
        displayMovie();
        favMoviesEl.textContent = '';
    }
}

function displayModMovie(event) {
    var element = event.target;
    var divEl = element.parentElement.parentElement;

    var imgSrc = divEl.querySelector('img').getAttribute('src');
    var titVal = divEl.querySelector('div').textContent;

    var img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    var h2 = document.createElement('h2');
    h2.textContent = titVal;

    var label = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');
    input.setAttribute('type', 'checkbox');
    span.textContent = 'Select the movie as my movie choice';
    label.append(input, span)
    movieFormEl.append(h2, img, label);
    mymovie.textContent = '';

}

function removeMovie(event) {
    var element = event.target;
    if (element.matches('button') === true) {
        var index = element.parentElement.getAttribute('data-index');
        movieList.splice(index, 1);
        element.parentElement.remove();
    }
    setMovie();
}

$('.fav-movies').children('div').on('click', removeMovie);
foodBlock.on('click', displayModMovie);
movieFormEl.on('click', handleMovieFav);