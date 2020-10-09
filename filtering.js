// Fetch the items from the JSON file
function loadRecipes() {
  return fetch("recipes.json")
    .then((response) => response.json())
    .then((json) => json.recipes);
}
