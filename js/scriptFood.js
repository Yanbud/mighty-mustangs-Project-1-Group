var btnCategory1El = document.querySelector('#btnBeef');
var btnCategory2El = document.querySelector('#btnChicken');
var btnCategory3El = document.querySelector('#btnSeafood');
var btnCategory4El = document.querySelector('#btnVegetarian');
var btnDessertMeals = document.querySelector('#btnDessert');
var btnClear = document.querySelector('#btnClear');

var selectedFoodTitle = document.querySelector('#selected-food-title')

var foodDiv3 = document.querySelector('food-div-3');

var foodSectionDiv = document.querySelector('food-section');

var foodTitle1 = document.querySelector('#food-title-1');
var foodTitle2 = document.querySelector('#food-title-2');
var foodTitle3 = document.querySelector('#food-title-3');
var foodTitle4 = document.querySelector('#food-title-4');

var foodName4;

var ingredientsArray = [];

var mealId = '';


var foodImages = [
  foodImg1 = document.querySelector('#food-img-1'),
  foodImg2 = document.querySelector('#food-img-2'),
  foodImg3 = document.querySelector('#food-img-3'),
  foodImg4 = document.querySelector('#food-img-4')
]
console.log(foodImages.length);

//base url
// https://www.themealdb.com/api/json/v1/1/

var searchRandomMealCategory = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      return data;
    })
}

searchRandomMealCategory();

var searchMealCategoryBeef = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      foodImg1.classList.remove("hide");
      foodTitle1.classList.remove("hide");
      foodImg2.classList.remove("hide");
      foodTitle2.classList.remove("hide");
      foodImg3.classList.remove("hide");
      foodTitle3.classList.remove("hide");
      foodImg4.classList.remove("hide");
      foodTitle4.classList.remove("hide");


      var foodOneIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

      return data;
    })
}
  ;

var searchMealCategoryChicken = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var foodOneIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

      return data;
    })
}
  ;

var searchMeal = function (name) {
  var name = foodTitle4.textContent;
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
}

var searchMealSeafood = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var foodOneIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

      return data;
    })
}
  ;

var searchMealDessert = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      foodImg1.classList.remove("hide");
      foodTitle1.classList.remove("hide");
      foodImg2.classList.remove("hide");
      foodTitle2.classList.remove("hide");
      foodImg3.classList.remove("hide");
      foodTitle3.classList.remove("hide");
      foodImg4.classList.remove("hide");
      foodTitle4.classList.remove("hide");

      var foodOneIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))]
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

      return data;
    })
}
  ;

var searchMealVegetarian = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var foodOneIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;
      foodImg1.classList.remove("hide");
      foodTitle1.classList.remove("hide");

      console.log(data.meals[foodOneIndex].strMeal)

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;
      foodImg2.classList.remove("hide");
      foodTitle2.classList.remove("hide");

      console.log(data.meals[foodTwoIndex].strMeal)

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;
      foodImg3.classList.remove("hide");
      foodTitle3.classList.remove("hide");

      console.log(data.meals[foodThreeIndex].strMeal)

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodName4 = data.meals[foodFourIndex].strMeal
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;
      foodImg4.classList.remove("hide");
      foodTitle4.classList.remove("hide");

   console.log(foodName4)
      console.log(data.meals[foodFourIndex].strMeal)

      return data;
    })
}
  ;
//when you click button, other pictures hide
var showIngredientsFour = function () {
  selectedFoodTitle.textContent = foodName4;
  foodImg1.classList.toggle("hide");
  foodTitle1.textContent = 'Ingredients List';
  foodTitle1.classList.toggle("hide");
  foodImg2.classList.toggle("hide");
  foodTitle2.textContent = 'ingredients';
  foodImg3.classList.toggle("hide");
  foodTitle3.textContent = 'placeholder';
  searchMealFourRecipe(foodName4)
  return foodName4
}

//search ingredients and recipe
var searchMealFourRecipe = function (foodName4) {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodName4;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      listIngredientsFour(data.meals[0].idMeal);
      foodTitle2.textContent = data.meals[0].strInstructions;


      // var listIngredientsFour = function (){
      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientOne = document.createElement('p');
      //   ingredientOne.textContent = data.meals[0].strIngredient1;
      //   foodTitle1.append(ingredientOne);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientTwo = document.createElement('p');
      //   ingredientTwo.textContent = data.meals[0].strIngredient2;
      //   foodTitle1.append(ingredientTwo);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientThree = document.createElement('p');
      //   ingredientThree.textContent = data.meals[0].strIngredient3;
      //   foodTitle1.append(ingredientThree);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientFour = document.createElement('p');
      //   ingredientFour.textContent = data.meals[0].strIngredient4;
      //   foodTitle1.append(ingredientFour);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientFive = document.createElement('p');
      //   ingredientFive.textContent = data.meals[0].strIngredient5;
      //   foodTitle1.append(ingredientFive);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientSix = document.createElement('p');
      //   ingredientSix.textContent = data.meals[0].strIngredient6;
      //   foodTitle1.append(ingredientSix);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientSeven = document.createElement('p');
      //   ingredientSeven.textContent = data.meals[0].strIngredient5;
      //   foodTitle1.append(ingredientSeven);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientEight = document.createElement('p');
      //   ingredientEight.textContent = data.meals[0].strIngredient7;
      //   foodTitle1.append(ingredientEight);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientNine = document.createElement('p');
      //   ingredientNine.textContent = data.meals[0].strIngredient8;
      //   foodTitle1.append(ingredientNine);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientTen = document.createElement('p');
      //   ingredientTen.textContent = data.meals[0].strIngredient9;
      //   foodTitle1.append(ingredientTen);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientTen = document.createElement('p');
      //   ingredientTen.textContent = data.meals[0].strIngredient10;
      //   foodTitle1.append(ingredientTen);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientEleven = document.createElement('p');
      //   ingredientEleven.textContent = data.meals[0].strIngredient11;
      //   foodTitle1.append(ingredientEleven);
      // }

      // if (data.meals[0].strIngredient1 !== '') {
      //   var ingredientTwelve = document.createElement('p');
      //   ingredientTwelve.textContent = data.meals[0].strIngredient12;
      //   foodTitle1.append(ingredientTwelve);
      // }}
     return data;
    })
}

var clear = function () {
  foodImg1.classList.remove("hide");
  foodImg1.src = "images/food.jpg"
  foodTitle1.textContent = '';

  foodImg2.classList.remove("hide");
  foodImg2.src = "images/food.jpg"
  foodTitle2.textContent = '';

  foodImg3.classList.remove("hide");
  foodImg3.src = "images/food.jpg"
  foodTitle3.textContent = '';

  foodImg4.classList.remove("hide");
  foodImg4.src = "images/food.jpg"
  foodTitle4.textContent = '';
}

//functions to search meal categories
btnCategory1El.addEventListener('click', searchMealCategoryBeef);
btnCategory3El.addEventListener('click', searchMealSeafood);
btnCategory4El.addEventListener('click', searchMealVegetarian);
btnCategory2El.addEventListener('click', searchMealCategoryChicken);
btnDessertMeals.addEventListener('click', searchMealDessert);

foodImg4.addEventListener('click', showIngredientsFour);

btnClear.addEventListener('click', clear);

//to-do
//when hover over picture, display ingrdients,
//be able to save preferred meal to storage






var listIngredientsFour = function (idMeal){
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      ingredientsArray = [];



  if (data.meals[0].strIngredient1 !== '') {
    var ingredientOne = document.createElement('p');
    ingredientOne.textContent = data.meals[0].strIngredient1;
    foodTitle1.append(ingredientOne);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientTwo = document.createElement('p');
    ingredientTwo.textContent = data.meals[0].strIngredient2;
    foodTitle1.append(ingredientTwo);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientThree = document.createElement('p');
    ingredientThree.textContent = data.meals[0].strIngredient3;
    foodTitle1.append(ingredientThree);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientFour = document.createElement('p');
    ingredientFour.textContent = data.meals[0].strIngredient4;
    foodTitle1.append(ingredientFour);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientFive = document.createElement('p');
    ingredientFive.textContent = data.meals[0].strIngredient5;
    foodTitle1.append(ingredientFive);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientSix = document.createElement('p');
    ingredientSix.textContent = data.meals[0].strIngredient6;
    foodTitle1.append(ingredientSix);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientSeven = document.createElement('p');
    ingredientSeven.textContent = data.meals[0].strIngredient5;
    foodTitle1.append(ingredientSeven);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientEight = document.createElement('p');
    ingredientEight.textContent = data.meals[0].strIngredient7;
    foodTitle1.append(ingredientEight);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientNine = document.createElement('p');
    ingredientNine.textContent = data.meals[0].strIngredient8;
    foodTitle1.append(ingredientNine);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientTen = document.createElement('p');
    ingredientTen.textContent = data.meals[0].strIngredient9;
    foodTitle1.append(ingredientTen);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientTen = document.createElement('p');
    ingredientTen.textContent = data.meals[0].strIngredient10;
    foodTitle1.append(ingredientTen);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientEleven = document.createElement('p');
    ingredientEleven.textContent = data.meals[0].strIngredient11;
    foodTitle1.append(ingredientEleven);
  }

  if (data.meals[0].strIngredient1 !== '') {
    var ingredientTwelve = document.createElement('p');
    ingredientTwelve.textContent = data.meals[0].strIngredient12;
    foodTitle1.append(ingredientTwelve);
  }})}