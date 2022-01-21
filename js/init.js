var ingredientsContainerOne = document.querySelector("#ingredients-container-1");

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
        console.log(element)
        var imgSrc = divEl.querySelector('img').getAttribute('src');
        console.log(imgSrc);
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
    getInstruction(titVal);
    getIngredientsList(titVal);


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


var getInstruction = function(titVal) {

    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + titVal;
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            //   var titVal = divEl.querySelector('div').textContent;     
            //   var element = event.target;

            //   var divEl = element.parentElement.parentElement;
            //   console.log(divEl);


            modalRecipeInstructions.textContent = "";
            //   modalRecipeInstructions.textContent = data.meals[0].strInstructions;


            modalRecipeInstructions.textContent = data.meals[0].strInstructions;
        })

}

var getIngredientsList = function(titVal) {
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + titVal;
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            ingredientsContainerOne.textContent = '';
            if (data.meals[0].strIngredient1 !== "" && data.meals[0].strIngredient1 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '1.' + ' ' + data.meals[0].strIngredient1 + ' ' + '(' + data.meals[0].strMeasure1 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient2 !== "" && data.meals[0].strIngredient2 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '2.' + ' ' + data.meals[0].strIngredient2 + ' ' + '(' + data.meals[0].strMeasure2 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient3 !== "" && data.meals[0].strIngredient3 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '3.' + ' ' + data.meals[0].strIngredient3 + ' ' + '(' + data.meals[0].strMeasure3 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient4 !== "" && data.meals[0].strIngredient4 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '4.' + ' ' + data.meals[0].strIngredient4 + ' ' + '(' + data.meals[0].strMeasure4 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient5 !== "" && data.meals[0].strIngredient5 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '5.' + ' ' + data.meals[0].strIngredient5 + ' ' + '(' + data.meals[0].strMeasure5 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient6 !== "" && data.meals[0].strIngredient6 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '6.' + ' ' + data.meals[0].strIngredient6 + ' ' + '(' + data.meals[0].strMeasure6 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient7 !== "" && data.meals[0].strIngredient7 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '7.' + ' ' + data.meals[0].strIngredient7 + ' ' + '(' + data.meals[0].strMeasure7 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient8 !== "" && data.meals[0].strIngredient8 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '8.' + ' ' + data.meals[0].strIngredient8 + ' ' + '(' + data.meals[0].strMeasure8 + ')';
                ingredientsContainerOne.append(listIngredient)
            }
            if (data.meals[0].strIngredient9 !== "" && data.meals[0].strIngredient9 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '9.' + ' ' + data.meals[0].strIngredient9 + ' ' + '(' + data.meals[0].strMeasure9 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient10 !== "" && data.meals[0].strIngredient10 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '10.' + ' ' + data.meals[0].strIngredient10 + ' ' + '(' + data.meals[0].strMeasure10 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient11 !== "" && data.meals[0].strIngredient11 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '11.' + ' ' + data.meals[0].strIngredient11 + ' ' + '(' + data.meals[0].strMeasure11 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient12 !== "" && data.meals[0].strIngredient12 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '12.' + ' ' + data.meals[0].strIngredient12 + ' ' + '(' + data.meals[0].strMeasure12 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient13 !== "" && data.meals[0].strIngredient13 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '13.' + ' ' + data.meals[0].strIngredient13 + ' ' + '(' + data.meals[0].strMeasure13 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient14 !== "" && data.meals[0].strIngredient14 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '14.' + ' ' + data.meals[0].strIngredient14 + ' ' + '(' + data.meals[0].strMeasure14 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient15 !== "" && data.meals[0].strIngredient15 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '15.' + ' ' + data.meals[0].strIngredient15 + ' ' + '(' + data.meals[0].strMeasure15 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient16 !== "" && data.meals[0].strIngredient16 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '16.' + ' ' + data.meals[0].strIngredient16 + ' ' + '(' + data.meals[0].strMeasure16 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient17 !== "" && data.meals[0].strIngredient17 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '17.' + ' ' + data.meals[0].strIngredient17 + ' ' + '(' + data.meals[0].strMeasure17 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient18 !== "" && data.meals[0].strIngredient18 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '18.' + ' ' + data.meals[0].strIngredient18 + ' ' + '(' + data.meals[0].strMeasure18 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient19 !== "" && data.meals[0].strIngredient19 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '19.' + ' ' + data.meals[0].strIngredient19 + ' ' + '(' + data.meals[0].strMeasure19 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            if (data.meals[0].strIngredient20 !== "" && data.meals[0].strIngredient20 !== null) {
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '20.' + ' ' + data.meals[0].strIngredient20 + ' ' + '(' + data.meals[0].strMeasure20 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }
            return data;
        })
}

init();
$('#modal1').on('hide', function() {
    window.location.reload();
});

//function to display modal from local storage

// var displayLocalModal = function(event){


// }
