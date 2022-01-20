var btnCategory1El = document.querySelector('#btnBeef');
var btnCategory2El = document.querySelector('#btnChicken');
var btnCategory3El = document.querySelector('#btnSeafood');
var btnCategory4El = document.querySelector('#btnVegetarian');
var btnCategory5El = document.querySelector('#btnDessert');



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



  //function to look up random meals
var searchMeal = function () {
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



//search meal by category
// www.themealdb.com/api/json/v1/1/categories.php

// var searchRandomMealCategory = function () {
//   var requestUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
      
//       return data;
//     })}

//search beef
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

//search chicken
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

//search seafood
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

//search vegetarian
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

      console.log(data.meals[foodOneIndex].strMeal)

      var foodTwoIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg2.src = data.meals[foodTwoIndex].strMealThumb;
      foodTitle2.textContent = data.meals[foodTwoIndex].strMeal;

      console.log(data.meals[foodTwoIndex].strMeal)

      var foodThreeIndex = [(Math.floor(Math.random() * data.meals.length))];
      foodImg3.src = data.meals[foodThreeIndex].strMealThumb;
      foodTitle3.textContent = data.meals[foodThreeIndex].strMeal;;

      console.log(data.meals[foodThreeIndex].strMeal)

      var foodFourIndex = [(Math.floor(Math.random() * data.meals.length))];

      foodImg4.src = data.meals[foodFourIndex].strMealThumb;

      var foodName4 = data.meals[foodFourIndex].strMeal;
      console.log(foodName4)
      foodTitle4.textContent = data.meals[foodFourIndex].strMeal;

    return data;
    })}
;

//searchDessert
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
btnCategory1El.addEventListener('click', searchMealCategoryBeef);
btnCategory2El.addEventListener('click', searchMealCategoryChicken);
btnCategory3El.addEventListener('click',searchMealSeafood);
btnCategory4El.addEventListener('click',searchMealVegetarian);
btnCategory5El.addEventListener('click', searchMealDessert);


// var getInstruction = function (mealName) {

//   var requestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName;
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         console.log("Working!")

//         modalRecipeInstructions.textContent = "";
//       var recipeInstructions = data.meals[0].strInstructions;
//       modalRecipeInstructions.textContent = data.meals[0].strInstructions;



//       // if (data.meals[0].strIngredient1 !== "") {
//       //     console.log(data.meals[0].strIngredient1);
//       //     var ingredientOne = document.createElement('p');
//       //     ingredientOne.textContent = data.meals[0].strIngredient1;
//       // }
//       // console.log(ingredientOne);


// })

// }



// var modalRecipeInstructions = document.querySelector("#recipe-instructions");
// var modalRecipeIngredientsAmount = document.querySelector("#recipe-ingredients-amount");
// var modalRecipeIngredients = document.querySelector("recipe-ingredients");