// Fetch the items from the JSON file
function loadRecipesInfo() {
  return fetch("data/recipes_info.json")
    .then((response) => response.json())
    .then((json) => json.recipes);
}

function createElement(recipe) {
  const img = document.createElement("img");
  img.setAttribute("class", "thumbnail");
  img.setAttribute("src", recipe.IMG_URL);

  const div = document.createElement("div");
  div.setAttribute("class", "description");
  div.innerText = `${recipe.RECIPE_NM_KO}`;

  const a = document.createElement("a");
  a.setAttribute("class", "recipe");
  a.setAttribute("href", "recipe.html");
  a.setAttribute("recipe__level", recipe.LEVEL_NM);
  a.setAttribute("recipe__type", recipe.TY_NM);
  a.setAttribute("recipe_id", recipe.RECIPE_ID);

  a.append(img);
  a.append(div);

  return a;
}

function findRecipes(event, recipes) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  if (key == null || value == null) {
    return;
  } else if (key == "all" && value == "all") {
    showAllRecipes(recipes);
  } else {
    updateRecipes(recipes, value);
  }
}

function showAllRecipes(recipes) {
  const a = document.querySelectorAll("a");
  let idx = 0;
  console.log("Logo Clicked!");
  recipes.forEach(function () {
    a[idx].classList.remove("invisible");
    idx++;
  });
}

function updateRecipes(recipes, value) {
  const a = document.querySelectorAll("a");
  let idx = 0;
  recipes.forEach((recipe) => {
    if (
      recipe.SUMRY.indexOf(value) === -1 &&
      recipe.RECIPE_NM_KO.indexOf(value) === -1
    ) {
      console.log("Not Find!");
      a[idx].classList.add("invisible");
    } else {
      console.log("Find!");
      a[idx].classList.remove("invisible");
    }
    idx++;
  });
}

loadRecipesInfo().then((data) => {
  const elements = data.map(createElement);
  const container = document.querySelector(".recipes");
  container.append(...elements);

  const logo = document.querySelector(".logo");
  const ings = document.querySelector(".ings");
  logo.addEventListener("click", (event) => findRecipes(event, data));
  ings.addEventListener("click", (event) => findRecipes(event, data));
});
