var modalIngredientOne = document.querySelector("#recipe-ingredients-1");
var modalIngredientTwo = document.querySelector("#recipe-ingredients-2");
var modalIngredientThree = document.querySelector("#recipe-ingredients-3");
var modalIngredientFour = document.querySelector("#recipe-ingredients-4");
var modalIngredientFive = document.querySelector("#recipe-ingredients-5");
var modalIngredientSix = document.querySelector("#recipe-ingredients-6");
var modalIngredientSeven = document.querySelector("#recipe-ingredients-7");
var modalIngredientEight = document.querySelector("#recipe-ingredients-8");
var modalIngredientNine = document.querySelector("#recipe-ingredients-9");
var modalIngredientTen = document.querySelector("#recipe-ingredients-10");
var modalIngredientEleven = document.querySelector("#recipe-ingredients-11");
var modalIngredientTwelve = document.querySelector("#recipe-ingredients-12");
var modalIngredientThirteen = document.querySelector("#recipe-ingredients-13");
var modalIngredientFourteen = document.querySelector("#recipe-ingredients-14");
var modalIngredientFifteen = document.querySelector("#recipe-ingredients-15");
var modalIngredientSixteen = document.querySelector("#recipe-ingredients-16");
var modalIngredientSeventeen = document.querySelector("#recipe-ingredients-17");
var modalIngredientEighteen = document.querySelector("#recipe-ingredients-18");
var modalIngredientNineteen = document.querySelector("#recipe-ingredients-19");
var modalIngredientTwenty = document.querySelector("#recipe-ingredients-20");

var ingredientsContainerOne = document.querySelector("#ingredients-container-1");


// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    // var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});


var foodEl = $('.food-imgs');
var favEl = $('.food-imgs').children('span')
var favCss = favEl.attr('class');
var favFoodsEl = $('.fav-foods');
var foodFormEl = $('#food-check');
var closeBtn = $('#close-button');
var foodBlock = $('.icon-block');
var myfood = $('.myfood');
var foodList = [];

function displayFood() {
    favFoodsEl.innerHTML = '';
    for (var i = 0; i < foodList.length; i++) {
        var items = foodList[i];
        var div = document.createElement('div');
        div.setAttribute('data-index', i);
        div.setAttribute('class', 'icon-block');
        var img = document.createElement('img');
        img.setAttribute('src', items.img);
        img.setAttribute('style', 'width:100px');
        var h2 = document.createElement('h2');
        h2.textContent = items.title;
        var day = new Date();
        var divDate = document.createElement('div');
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayName = days[day.getDay()];
        divDate.textContent = dayName + '\n' + day.getMonth() + 1 + '-' + day.getDate() + '-' + day.getFullYear();
        div.append(img, h2, divDate);
        favFoodsEl.append(div);
    }


}

function init() {
    var storedFood = JSON.parse(localStorage.getItem('foodList'));
    if (storedFood !== null) {
        foodList = storedFood;
    }
    displayFood();
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
        console.log(divEl);
        foodList.push(recipe);
        setFood();
        displayFood();
        favFoodsEl.textContent = '';

    }
}

//when click image
function displayMod(event) {
    var element = event.target;

    var divEl = element.parentElement.parentElement;
    console.log(divEl);
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


function refresh(event) {
    var element = event.target;
    if (element.matches('closeBtn') === true) {
        location.reload();
    }
}
closeBtn.on('click', refresh);
foodBlock.on('click', displayMod);
foodFormEl.on('click', handleFoodFav);



//my code


var getInstruction = function (titVal) {

    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + titVal;
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


            modalRecipeInstructions.textContent = "";
            //   modalRecipeInstructions.textContent = data.meals[0].strInstructions;


            modalRecipeInstructions.textContent = data.meals[0].strInstructions;
        })

}

//function to get ingredients

//function to get ingredients amount
//apend to ingredients


var getIngredientsList = function (titVal) {
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + titVal;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // var count = 0;        
            // for (let i = 0; i <3; i++){
            // var ingredient = data.meals[0].strIngredient   
            // count++
            // if (ingredient !== ''){
            //     console.log(data.meals[0].strIngredient`${count}`)
            // } 
            // }

            // works
            ingredientsContainerOne.textContent = '';

            if (data.meals[0].strIngredient1 !== "" && data.meals[0].strIngredient1 !== null) {
                console.log(data.meals[0].strIngredient1)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '1.' + ' ' + data.meals[0].strIngredient1 + ' ' + '(' + data.meals[0].strMeasure1 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient2 !== "" && data.meals[0].strIngredient2 !== null) {
                console.log(data.meals[0].strIngredient2)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '2.' + ' ' + data.meals[0].strIngredient2 + ' ' + '(' + data.meals[0].strMeasure2 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient3 !== "" && data.meals[0].strIngredient3 !== null) {
                console.log(data.meals[0].strIngredient3)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '3.' + ' ' + data.meals[0].strIngredient3 + ' ' + '(' + data.meals[0].strMeasure3 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient4 !== "" && data.meals[0].strIngredient4 !== null) {
                console.log(data.meals[0].strIngredient4)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '4.' + ' ' + data.meals[0].strIngredient4 + ' ' + '(' + data.meals[0].strMeasure4 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient5 !== "" && data.meals[0].strIngredient5 !== null) {
                console.log(data.meals[0].strIngredient5)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '5.' + ' ' + data.meals[0].strIngredient5 + ' ' + '(' + data.meals[0].strMeasure5 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient6 !== "" && data.meals[0].strIngredient6 !== null) {
                console.log(data.meals[0].strIngredient6)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '6.' + ' ' + data.meals[0].strIngredient6 + ' ' + '(' + data.meals[0].strMeasure6 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient7 !== "" && data.meals[0].strIngredient7 !== null) {
                console.log(data.meals[0].strIngredient7)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '7.' + ' ' + data.meals[0].strIngredient7 + ' ' + '(' + data.meals[0].strMeasure7 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient8 !== "" && data.meals[0].strIngredient8 !== null) {
                console.log(data.meals[0].strIngredient8)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '8.' + ' ' + data.meals[0].strIngredient8 + ' ' + '(' + data.meals[0].strMeasure8 + ')';
                ingredientsContainerOne.append(listIngredient)
            }

            if (data.meals[0].strIngredient9 !== "" && data.meals[0].strIngredient9 !== null) {
                console.log(data.meals[0].strIngredient9)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '9.' + ' ' + data.meals[0].strIngredient9 + ' ' + '(' + data.meals[0].strMeasure9 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            if (data.meals[0].strIngredient10 !== "" && data.meals[0].strIngredient10 !== null) {
                console.log(data.meals[0].strIngredient10)
                var listIngredient = document.createElement('p');
                listIngredient.textContent = '10.' + ' ' + data.meals[0].strIngredient10 + ' ' + '(' + data.meals[0].strMeasure10 + ')';
                ingredientsContainerOne.append(listIngredient)
            } else {
                return data
            }

            

            // var ingredientOne = '1.' + ' ' + data.meals[0].strIngredient1 + ' ' + '( ' + data.meals[0].strMeasure1 + ' )';
            // var ingredientTwo = '2.' + ' ' + data.meals[0].strIngredient2 + ' ' + '( ' + data.meals[0].strMeasure2 + ' )';
            // var ingredientThree = '3.' + ' ' + data.meals[0].strIngredient3 + ' ' + '( ' + data.meals[0].strMeasure3 + ' )';
            // var ingredientFour = '4.' + ' ' + data.meals[0].strIngredient4 + ' ' + '( ' + data.meals[0].strMeasure4 + ' )';
            // var ingredientFive = '5.' + ' ' + data.meals[0].strIngredient5 + ' ' + '( ' + data.meals[0].strMeasure5 + ' )';
            // var ingredientSix = '6.' + ' ' + data.meals[0].strIngredient6 + ' ' + '( ' + data.meals[0].strMeasure6 + ' )';
            // var ingredientSeven = '7.' + ' ' + data.meals[0].strIngredient7 + ' ' + '( ' + data.meals[0].strMeasure7 + ' )';
            // var ingredientEight = '8.' + ' ' + data.meals[0].strIngredient8 + ' ' + '( ' + data.meals[0].strMeasure8 + ' )';
            // var ingredientNine = '9.' + ' ' + data.meals[0].strIngredient9 + ' ' + '( ' + data.meals[0].strMeasure9 + ' )';
            // var ingredientTen = '10.' + ' ' + data.meals[0].strIngredient10 + ' ' + '( ' + data.meals[0].strMeasure10 + ' )';
            // //2nd ingredient container
            // var ingredientEleven = '11.' + ' ' + data.meals[0].strIngredient11 + ' ' + '( ' + data.meals[0].strMeasure11 + ' )';
            // var ingredientTwelve = '12.' + ' ' + data.meals[0].strIngredient12 + ' ' + '( ' + data.meals[0].strMeasure12 + ' )';
            // var ingredientThirteen = '13.' + ' ' + data.meals[0].strIngredient13 + ' ' + '( ' + data.meals[0].strMeasure13 + ' )';
            // var ingredientFourteen = '14.' + ' ' + data.meals[0].strIngredient14 + ' ' + '( ' + data.meals[0].strMeasure14 + ' )';
            // var ingredientFifteen = '15.' + ' ' + data.meals[0].strIngredient15 + ' ' + '( ' + data.meals[0].strMeasure15 + ' )';
            // var ingredientSixteen = '16.' + ' ' + data.meals[0].strIngredient16 + ' ' + '( ' + data.meals[0].strMeasure16 + ' )';
            // var ingredientSeventeen = '17.' + ' ' + data.meals[0].strIngredient17 + ' ' + '( ' + data.meals[0].strMeasure17 + ' )';
            // var ingredientEighteen = '18.' + ' ' + data.meals[0].strIngredient18 + ' ' + '( ' + data.meals[0].strMeasure18 + ' )';
            // var ingredientNineteen = '19.' + ' ' + data.meals[0].strIngredient19 + ' ' + '( ' + data.meals[0].strMeasure19 + ' )';
            // var ingredientTwenty = '20.' + ' ' + data.meals[0].strIngredient20 + ' ' + '( ' + data.meals[0].strMeasure20 + ' )';

            // // ingredients 1-10
            // modalIngredientOne.textContent = ingredientOne;
            // modalIngredientTwo.textContent = ingredientTwo;
            // modalIngredientThree.textContent = ingredientThree;
            // modalIngredientFour.textContent = ingredientFour;
            // modalIngredientFive.textContent = ingredientFive;
            // modalIngredientSix.textContent = ingredientSix;
            // modalIngredientSeven.textContent = ingredientSeven;
            // modalIngredientEight.textContent = ingredientEight;
            // modalIngredientNine.textContent = ingredientNine;
            // modalIngredientTen.textContent = ingredientTen;
            // //ingredients 11-20
            // modalIngredientEleven.textContent = ingredientEleven;
            // modalIngredientTwelve.textContent = ingredientTwelve;
            // modalIngredientThirteen.textContent = ingredientThirteen;
            // modalIngredientFourteen.textContent = ingredientFourteen;
            // modalIngredientFifteen.textContent = ingredientFifteen;
            // modalIngredientSixteen.textContent = ingredientSixteen;
            // modalIngredientSeventeen.textContent = ingredientSeventeen;
            // modalIngredientEighteen.textContent = ingredientEighteen;
            // modalIngredientNineteen.textContent = ingredientNineteen;
            // modalIngredientTwenty.textContent = ingredientTwenty;



            // hide modals if empty


            // if (modalIngredientOne !== '') {
            //     modalIngredientOne.textContent = ingredientOne;
            // } else {
            //     modalIngredientOne.classList.add('hide');
            // }

            // if (modalIngredientTwo !== '') {
            //     modalIngredientTwo.textContent = ingredientTwo;
            // } else {
            //     modalIngredientTwo.classList.add('hide');
            // }

            // if (modalIngredientThree !== '') {
            //     modalIngredientThree.textContent = ingredientThree;
            // } else {
            //     modalIngredientThree.classList.add('hide');
            // }

            // if (modalIngredientFour !== '') {
            //     modalIngredientFour.textContent = ingredientFour;
            // } else {
            //     modalIngredientFour.classList.add('hide');
            // }

            // if (modalIngredientFive !== '') {
            //     modalIngredientFive.textContent = ingredientFive;
            // } else {
            //     modalIngredientFive.classList.add('hide');
            // }

            // if (modalIngredientSix !== '') {
            //     modalIngredientSix.textContent = ingredientSix;
            // } else {
            //     modalIngredientSix.classList.add('hide');
            // }

            // if (modalIngredientSeven !== '') {
            //     modalIngredientSeven.textContent = ingredientSeven;
            // } else {
            //     modalIngredientSeven.classList.add('hide');
            // }

            // if (modalIngredientEight !== '') {
            //     modalIngredientEight.textContent = ingredientEight;
            // } else {
            //     modalIngredientEight.classList.add('hide');
            // }

            // if (modalIngredientNine !== '') {
            //     modalIngredientNine.textContent = ingredientNine;
            // } else {
            //     modalIngredientNine.classList.add('hide');
            // }

            // if (modalIngredientTen !== '') {
            //     modalIngredientTen.textContent = ingredientTen;
            // } else {
            //     modalIngredientTen.classList.add('hide');
            // }

            // if (modalIngredientEleven !== '') {
            //     modalIngredientEleven.textContent = ingredientEleven;
            // } else {
            //     modalIngredientEleven.classList.add('hide');
            // }

            // if (modalIngredientTwelve !== '') {
            //     modalIngredientTwelve.textContent = ingredientTwelve;
            // } else {
            //     modalIngredientTwelve.classList.add('hide');
            // }
            // if (modalIngredientThirteen !== '') {
            //     modalIngredientThirteen.textContent = ingredientThirteen;
            // } else {
            //     modalIngredientThirteen.classList.add('hide');
            // }
            // if (modalIngredientFourteen !== '') {
            //     modalIngredientFourteen.textContent = ingredientFourteen;
            // } else {
            //     modalIngredientFourteen.classList.add('hide');
            // }
            // if (modalIngredientFifteen !== '') {
            //     modalIngredientFifteen.textContent = ingredientFifteen;
            // } else {
            //     modalIngredientFifteen.classList.add('hide');
            // }

            // if (modalIngredientSixteen !== '') {
            //     modalIngredientSixteen.textContent = ingredientSixteen;
            // } else {
            //     modalIngredientSixteen.classList.add('hide');
            // }

            // if (modalIngredientSeventeen !== '') {
            //     modalIngredientSeventeen.textContent = ingredientSeventeen;
            // } else {
            //     modalIngredientSeventeen.classList.add('hide');
            // }

            // if (modalIngredientEighteen !== '') {
            //     modalIngredientEighteen.textContent = ingredientEighteen;
            // } else {
            //     modalIngredientEighteen.classList.add('hide');
            // }

            // if (modalIngredientNineteen !== '') {
            //     modalIngredientNineteen.textContent = ingredientNineteen;
            // } else {
            //     modalIngredientNineteen.classList.add('hide');
            // }

            // if (modalIngredientTwenty !== '') {
            //     modalIngredientTwenty.textContent = ingredientTwenty;
            // } else {
            //     modalIngredientTwenty.classList.add('hide');
            // }


            return data;
        }

        )


}

init();