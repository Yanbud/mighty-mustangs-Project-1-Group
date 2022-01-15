var btnCategory1El = document.querySelector('#btn-category-1');
var btnCategory2El = document.querySelector('#btn-category-2');
var btnCategory3El = document.querySelector('#btn-category-3');
var btnCategory4El = document.querySelector('#btn-category-4');
var meal1DivEl = document.querySelector('#meal-1')



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
      btnCategory1El.textContent = data.meals[0].strMeal;
      if (data.meals[0].strIngrdient1 !== '') {
        console.log(data.meals[0].strIngredient1)
        meal1DivEl.textContent = 'Ingredient 1: ' + data.meals[0].strIngredient1;
      }
      return data;
    })}


  //function to display ingredients 
// var displayIngredients = function (mealName) {
//   for (let i = 0; i < categoryButton.length; i++)

// }

//function to select category

btnCategory1El.addEventListener('click', searchMeal)

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

var searchMealCategory = function () {
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      return data;
    })}

btnCategory1El.addEventListener('click', searchMeal);
btnCategory2El.addEventListener('click', searchRandomMealCategory);
btnCategory3El.addEventListener('click', searchMealCategory);

// var displayIngredients = function () {
  
// }

var displayMealsfromCategory = function () {
  
}




