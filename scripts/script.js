// function init() {
//     let clItem = document.getElementById("topCont");
//     clItem.addEventListener("click", generateRecipe)
// }
// window.addEventListener("load", init);

// function generateRecipe() {
//     clear();
//     let rnd = Math.floor(Math.random() * RECIPE_NAMES.length);

//     displayTitle(rnd);
//     displayIngredients(rnd);
//     displayInstructions(rnd);
// }

// function displayTitle(rnd) {
//     let title = document.getElementById("recipeTitle");
//     title.innerHTML = RECIPE_NAMES[rnd];

    
// }

// function displayIngredients(rnd) {
    
//     const arr = INGREDIENTS[rnd].slice();
//     let list = document.getElementById("ingList");

//     for (i = 0; i < arr.length; i++) {
//         let li = document.createElement("li");
//         list.appendChild(li);

//         li.innerHTML +=  arr[i];
//     }
// }

// function displayInstructions(rnd) {
//     let instr = document.getElementById("instructionsP");

//     instr.innerHTML = INSTRUCTIONS[rnd];
// }

// function clear() {
//     const list = document.getElementById("ingList");
    
//     while (list.firstChild) {
//         list.removeChild(list.firstChild);
//     }
// }


