function loadRecipesProcess() {
  return fetch("data/recipes_process.json")
    .then((response) => response.json())
    .then((json) => json.recipes);
}

function findProcess(event, steps) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;
  console.log(`key = ${key} value = ${value}`);
  if ((key == null) | (value == null)) {
    return;
  } else {
    steps.forEach((step) => {
      if (step.RECIPE_ID == target.RECIPE_ID) {
        createElement(step);
      }
    });
  }
}

function createElement(step) {
  const img_step = document.createElement("img");
  img_step.setAttribute("class", "img__step");
  img_step.setAttribute("src", step.STRE_STEP_IMAGE_URL);

  const span = document.createElement("span");
  span.setAttribute("class", "instruction");
  span.innerText = `${step.COOKING_NO}. ${step.COOKING_DC}`;

  const div = document.createElement("div");
  div.setAttribute("class", "recipe__step");

  div.append(img_step);
  div.append(span);

  return div;
}

loadRecipesProcess().then((data) => {
  const recipes = document.querySelector(".recipes");
  recipes.addEventListener("click", (event) => findProcess(event, data));
  const container = document.querySelector(".recipe__process");
  container.append(...steps);
});
