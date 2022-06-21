var clickDiv;

function init() {
    clickDiv = document.getElementById("topCont");
    clickDiv.addEventListener("click", generateRecipe);
}
window.addEventListener("load", init);

function generateRecipe() {
    clear();
    let rnd = Math.floor(Math.random() * RECEPT.length);

    let current = RECEPT[rnd];
    printRecipe(current);
}

function printRecipe(current) {
    let instrDiv = document.getElementById("instructionsP");
    let title = document.getElementById("recipeTitle");
    instrDiv.innerHTML = current.instructions;
    title.innerHTML = current.name;

    printIngredients(current);
}

function printIngredients(current) {
    let list = document.getElementById("ingList");
    // for (const [ingredient, amount] of current.ingredients) {
    //     let li = document.createElement("li");
    //     list.appendChild(li);

    //     li.innerHTML = ingredient + " " + amount;
    // }

    for (let i of current.ingredients) {
        let li = document.createElement("li");
        list.appendChild(li);
        li.innerHTML = i;
    }
}

function clear() {
    const list = document.getElementById("ingList");
    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}