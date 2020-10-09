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
  console.log(`key = ${key} value = ${value}`);
  findIngs(recipes);
  // updateItems(recipes, key, value);
}

function findIngs(recipes) {
  recipes.forEach((recipe) => {
    const name = recipe.RECIPE_NM_KO;
    const sum = recipe.SUMRY;
    console.log(`name = ${recipe.RECIPE_NM_KO} sum = ${recipe.SUMRY}`);
    // recipes.MAIN_ING =
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
