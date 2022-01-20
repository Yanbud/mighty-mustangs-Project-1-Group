var btnSearchBeef = document.querySelector('#btnBeef');
var btnSearchChicken = document.querySelector('#btnChicken');
var btnSearchSeafood = document.querySelector('#btnSeafood');
var btnSearchVegetarian = document.querySelector('#btnVegetarian');
var btnSearchDessert = document.querySelector('#btnDessert');

var foodTitle1 = document.querySelector('#food-title-1');
var foodTitle2 = document.querySelector('#food-title-2');
var foodTitle3 = document.querySelector('#food-title-3');
var foodTitle4 = document.querySelector('#food-title-4');

var foodImages = [
foodImg1 = document.querySelector('#food-img-1'),
foodImg2 = document.querySelector('#food-img-2'),
foodImg3 = document.querySelector('#food-img-3'),
foodImg4 = document.querySelector('#food-img-4') 
]

//access modal
var modalRecipeInstructions = document.querySelector("#recipe-instructions");
var modalRecipeIngredientsAmount = document.querySelector("#recipe-ingredients-amount");
var modalRecipeIngredients = document.querySelector("recipe-ingredients");

//base url to API
// https://www.themealdb.com/api/json/v1/1/

//search beef category
var searchMealCategoryBeef = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';
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
    })}
;

//search chicken category
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
    })}
;

//search seafood category
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
    })}
;

//search vegetarian category
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
      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;
      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;;
      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg4.src = data.meals[foodFourIndex].strMealThumb;
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

    return data;
    })}
;

//search dessert category
var searchMealDessert = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert';
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

//buttons to search categories
btnSearchBeef.addEventListener('click', searchMealCategoryBeef);
btnSearchChicken.addEventListener('click', searchMealCategoryChicken);
btnSearchSeafood.addEventListener('click',searchMealSeafood);
btnSearchVegetarian.addEventListener('click',searchMealVegetarian);
btnSearchDessert.addEventListener('click', searchMealDessert);
