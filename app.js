// Fetch the items from the JSON file
function loadItems() {
  return fetch("recipes.json")
    .then((response) => response.json())
    .then((json) => json.recipes);
}

// Update the list with the given items
function displayItems(recipes) {
  const container = document.querySelector(".recipes");
  container.innerHTML = recipes
    .map((recipe) => createHTMLString(recipe))
    .join("");
}

// Create HTML list item from the given data item
function createHTMLString(recipe) {
  return `
    <li class="recipe">
        <img src="${recipe.IMG_URL}" alt="${recipe.RECIPE_NM_KO}" class="item__thumbnail" />
        <span class="item__description">${recipe.RECIPE_NM_KO}, ${recipe.SUMRY}</span>
    </li>
    `;
}

function searchMainIng(recipes, key, value) {
  //재료 종류(IRDNT_CODE), 요약(SUMRY), 레시피 이름(RECIPE_NM_KO)를 비교하며
  //주재료가 맞는 레시피로 필터링함
  recipes.forEach();
}

function onButtonClick(event, recipes) {
  console.log(event.target);
  const dataset = event.target.dataset;
  console.log(dataset);
  const key = dataset.key;
  const value = dataset.value;
  console.log(`key = ${key} value = ${value}`);

  if (key == null || value == null) {
    return;
  }
  // searchMainIng(recipes, key, value);
  displayItems(recipes.filter((recipe) => recipe[key] === value));
}

function setEventListeners(recipes) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".ings");
  logo.addEventListener("click", () => displayItems(recipes));
  buttons.addEventListener("click", (event) => onButtonClick(event, recipes));
}

// main
loadItems()
  .then((recipes) => {
    displayItems(recipes);
    setEventListeners(recipes);
  })
  .catch(console.log);
