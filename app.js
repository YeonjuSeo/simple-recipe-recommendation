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

loadRecipes().then((data) => {
  const elements = data.map(createElement);
  const container = document.querySelector(".recipes");
  container.append(...elements);
});
