// Fetch the items from the JSON file
function loadRecipes() {
  return fetch("recipes.json")
    .then((response) => response.json())
    .then((json) => json.recipes);
}

function createElement(recipe) {
  const img = document.createElement("img");
  img.setAttribute("class", "thumbnail");
  img.setAttribute("src", recipe.IMG_URL);

  const span = document.createElement("span");
  span.setAttribute("class", "description");
  span.innerText = `${recipe.RECIPE_NM_KO}
     ${recipe.SUMRY}`;

  const li = document.createElement("li");
  li.setAttribute("class", "recipe");
  li.setAttribute("recipe__level", recipe.LEVEL_NM);
  li.setAttribute("recipe__type", recipe.TY_NM);

  li.append(img);
  li.append(span);

  return li;
}

function onButtonClick(event, recipes) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  if (key == null || value == null) {
    return;
  }
  // console.log(`target = ${event.target} key = ${key} value = ${value}`);
  findIngs(recipes, value);
  // updateItems(recipes, key, value);
}

function findIngs(recipes, value) {
  recipes.forEach((recipe) => {
    console.log(recipe);
    if (recipe.SUMRY.indexOf(value) != -1) {
      console.log("Find!");
      // show.classList.toggle("invisible");
    } else {
      console.log("Not Find!");
      recipe.classList.toggle("invisible");
    }
  });
}

function updateRecipes(recipes, key, value) {
  findIngs(recipes);
  recipes.forEach((recipe) => {
    if (recipe.dataset[key] === value) {
      recipe.classList.remove("invisible");
    } else {
      recipe.classList.add("invisible");
    }
  });
}

loadRecipes().then((data) => {
  const elements = data.map(createElement);
  const container = document.querySelector(".recipes");
  container.append(...elements);
  const ings = document.querySelector(".ings");
  ings.addEventListener("click", (event) => onButtonClick(event, data));
});
