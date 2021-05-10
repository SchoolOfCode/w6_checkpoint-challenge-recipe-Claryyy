// DOM variables
const aTag = document.getElementById("recipe-label");
const image = document.getElementById("recipe-image");

// API variables
const YOUR_APP_ID = "c4c18316"
const YOUR_APP_KEY = "05cb66da8bedfa9237bea4247c1216ac"

// Recipe variables
let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  const requestUrl = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const dataResponse = await requestUrl.json();
  console.log(dataResponse);
  const dataResult = dataResponse.hits[0];
  aTag.innerHTML = dataResult.recipe.label;
  aTag.href = dataResult.recipe.url;
  image.src = dataResult.recipe.image;
  document.body.appendChild(image); 
}
