class Recept {
    name;
    ingredients = new Map();
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
} // End of class

// All recipes

const RECEPT = [];

const bolloMap = new Map();
bolloMap.set("Tomat", 1);
bolloMap.set("Gurka", 2);
bolloMap.set("Vitlök", 3) 
bolloMap.set("Morot", 2);
bolloMap.set("KalvFond", 1);
bolloMap.set("Rödvin", 2);
const bolloIns = "Hacka alla grönsaker, stek köttfärsen och sedan blanda ihop allt"
const bollo = new Recept("Bollo", bolloMap, bolloIns);
RECEPT.push(bollo);

const cacioEPeppe = new Map();
cacioEPeppe.set("Pasta", 1);
cacioEPeppe.set("Peppar", 3);
cacioEPeppe.set("Pecorino", 5);
const cacioIns = "Koka pastan, blanda ihop ingreidienserna i en stekpanna när pastan har kokat färdigt"
const cacio = new Recept("Cacio e Peppe", cacioEPeppe, cacioIns);
RECEPT.push(cacio);

const aglioMap = new Map();
aglioMap.set("Pasta", 2);
aglioMap.set("Olivolja", 3);
aglioMap.set("Vitlök", 3);
const aglioIns = "Koka pastan, stek vitlöken i olivolja i en stekpanna, lägg i pastan."
const aglio = new Recept("Aglio e Olio", aglioMap, aglioIns);
RECEPT.push(aglio);
