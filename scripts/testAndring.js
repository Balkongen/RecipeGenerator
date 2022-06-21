class Recept {
    
    name;
    ingredients = [];
    instructions;

    constructor(name, ingredients ,instructions) {
        this.name = name;
        this.setIngridients(ingredients);
        this.setInstructions(instructions);
    }

    setIngridients(ingredients) {
        this.ingredients = ingredients;
    }

    setInstructions(instructions) {
        this.instructions = instructions;
    }

    // metoden funkar nu
    // använda substring istället för charAt() för att slippa konvertering från char till string?? minskar tiden??
    changeIngredientsAmount(factor) {
        for (let i = 0; i < this.ingredients.length; i++) {
            let amount = this.ingredients[i].charAt(0);
            if (this.checkNumber(amount)) {
                let rest = this.ingredients[i].substring(1);
                amount *= factor;
                this.ingredients[i] = amount + rest;   
            } 
        }
    }

    checkNumber(letter) {
        return letter >= '0' && letter <= '9';
    }

    printIngr() {
        for (let i of this.ingredients) {
            console.log(i);
        }
    }
} // End of class

// All recipes
const RECEPT = [];

const bolloIngr = [];
bolloIngr.push("1 buljongtärning");
bolloIngr.push("1 burk tomatsås");
bolloIngr.push("500 gram blandfärs");
bolloIngr.push("1 gullök");
bolloIngr.push("3 vitlöksklyftor");

const bolloIns = "Hacka alla grönsaker, stek köttfärsen och sedan blanda0 ihop allt";
const bollo = new Recept("Bollo", bolloIngr, bolloIns);
RECEPT.push(bollo);

const cacioIng = ["100 gram parmesan", "1 gram svartpeppar", "250gram valfri pasta"];
const cacioIns = "Koka pastan och blanda sedan in allt i stekpannan";
const cacioEPeppe = new Recept("Cacio e peppe", cacioIng, cacioIns);
RECEPT.push(cacioEPeppe);

const pastaPesto = new Recept(
    "Pasta Pesto",
    [
        "0.5 kruka basilika",
        "5 gram pinjenötter",
        "7 cl olivolja",
        "30 gram parmesan"
    ],
    "Mixa alla ingredienser med en stavmixer. Koka sedan pastan och blanda ihop det i stekpannan"
);
RECEPT.push(pastaPesto);

const penneVodka = new Recept(
    "Penne vodka",
    [
        "200 gram penne pasta",
        "70 gram tärnad bacon",
        "skvätt vodka",
        "100 gram tomatsås",
        "1,5 dl grädde"
    ],
    "Stek baconen och blanda sedan in alla andra ingredienser"
);
RECEPT.push(penneVodka);
