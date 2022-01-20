var btnCategory1El = document.querySelector('#btnBeef');
var btnCategory2El = document.querySelector('#btnChicken');
var btnCategory3El = document.querySelector('#btnSeafood');
var btnCategory4El = document.querySelector('#btnVegetarian');



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
console.log(foodImages.length);

//be able to call API and console log a response 
//make sure API works and we are able to pull data we care about 

//base url
// https://www.themealdb.com/api/json/v1/1/



  //function to look up random meals
var searchMeal = function (number) {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      console.log(data.meals[0].strMeal);
      // if (data.meals[0].strIngrdient1 !== '') {
      //   console.log(data.meals[0].strIngredient1)
      //   meal1DivEl.textContent = 'Ingredient 1: ' + data.meals[0].strIngredient1;
      // }
      return data;
    })}


  //function to display ingredients 
// var displayIngredients = function (mealName) {
//   for (let i = 0; i < categoryButton.length; i++)

// }

//function to select category

searchMeal();

var displayIngredients = function () {
  
}

//search meal by category
// www.themealdb.com/api/json/v1/1/categories.php

var searchRandomMealCategory = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      return data;
    })}

  //function to display ingredients 
// var displayIngredients = function (mealName) {
//   for (let i = 0; i < categoryButton.length; i++)

// }

//function to select category

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

searchRandomMealCategory();

// var searchMealCategory = function () {
//   var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
      
//       return data;
//     })}

var searchMealCategoryBeef = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      foodImg1.src = data.meals[(Math.floor(Math.random() * 42))].strMealThumb;
      foodImg2.src = data.meals[(Math.floor(Math.random() * 42))].strMealThumb;
      foodImg3.src = data.meals[(Math.floor(Math.random() * 42))].strMealThumb;
      foodImg4.src = data.meals[(Math.floor(Math.random() * 42))].strMealThumb;

      console.log(data.meals[0].strMealThumb)
    return data;
    })}
;

var searchMealCategoryChicken = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var foodOneIndex = [(Math.floor(Math.random() * 35))]
      foodImg1.src = data.meals[foodOneIndex].strMealThumb;
      foodTitle1.textContent = data.meals[foodOneIndex].strMeal;
      foodImg2.src = data.meals[(Math.floor(Math.random() * 35))].strMealThumb;
      foodImg3.src = data.meals[(Math.floor(Math.random() * 35))].strMealThumb;
      foodImg4.src = data.meals[(Math.floor(Math.random() * 35))].strMealThumb;
      console.log(data.meals[0].strMealThumb)
    return data;
    })}
;

var searchMealSeafood = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      foodImg1.src = data.meals[(Math.floor(Math.random() * 27))].strMealThumb;
      foodImg2.src = data.meals[(Math.floor(Math.random() * 27))].strMealThumb;
      foodImg3.src = data.meals[(Math.floor(Math.random() * 27))].strMealThumb;
      foodImg4.src = data.meals[(Math.floor(Math.random() * 27))].strMealThumb;
      console.log(data.meals[0].strMealThumb)
    return data;
    })}
;

var searchMealVegetarian = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      foodImg1.src = data.meals[(Math.floor(Math.random() * 32))].strMealThumb;
      foodImg2.src = data.meals[(Math.floor(Math.random() * 32))].strMealThumb;
      foodImg3.src = data.meals[(Math.floor(Math.random() * 32))].strMealThumb;
      foodImg4.src = data.meals[(Math.floor(Math.random() * 32))].strMealThumb;
      console.log(data.meals[0].strMealThumb)
    return data;
    })}
;

searchMealCategoryBeef();

searchMealSeafood();
searchMealVegetarian();

btnCategory1El.addEventListener('click', searchMealCategoryBeef);
// btnCategory2El.addEventListener('click', searchRandomMealCategory);
// btnCategory3El.addEventListener('click', searchMealCategory);
// var displayIngredients = function () {
// }


btnCategory3El.addEventListener('click',searchMealSeafood);
btnCategory4El.addEventListener('click',searchMealVegetarian);

var displayMealsfromCategory = function () {
}

//to-do
//Make functions for each button category
//on button click, search individual category, display divs with img sources based on meals
//when hover over picture, display ingrdients,
//be able to save preferred meal to storage
//function for each button = 

//refactoring code into for-loops
// var searchMealCategoryChicken = function () {
//   var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken';
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(data.meals[(Math.floor(Math.random() * 35))].strMealThumb);
      
//     return data;
//     })
//     for (let i = 0; i < foodImages.length[i]; i++) {
//         foodImages.foodImg[i].src = data.meals[(Math.floor(Math.random() * 35))].strMealThumb;
//       }}
// ;
searchMealCategoryChicken();
btnCategory2El.addEventListener('click', searchMealCategoryChicken);