var prompt = require('prompt-sync')();
var includes = require('array-includes');

class Ingredient {
    constructor(name, isVegetarian) {
        this.name = name;
        this.isVegetarian = isVegetarian;
      }
}

class Kebab {
    constructor(vegetarien, ingredients){
        this.vegetarien = vegetarien;
        this.ingredients = ingredients;
    }
    isVegetarian(){
        return this.ingredients.every(ingredient => ingredient.isVegetarian);
    }
}

var ingredientsDisponible = [];
var ingrédientsClient = [];

var tomate = new Ingredient('Tomate', true);
var viande = new Ingredient('Viande', false);
var salade = new Ingredient('Salade', true);
var oignon = new Ingredient('Oignon', true);
var pain = new Ingredient('Pain', true);

ingredientsDisponible.push(tomate);
ingredientsDisponible.push(viande);
ingredientsDisponible.push(salade);
ingredientsDisponible.push(oignon);
ingredientsDisponible.push(pain);

console.log('\n\nListe des ingrédients disponibles :');
console.table(ingredientsDisponible);

var choix = '';
var choix2= '';
var kebabFini = false
while (!kebabFini){
    console.log("Bonjour, que voulez-vous dans votre Kebab ?\n")
    choix = prompt();
    if (choix != 'Tomate' && choix != 'Viande' && choix != 'Salade' && choix != 'Oignon' && choix != 'Pain'){
        console.log('Veuillez choisir un ingrédient existant.')
        choix = '';
    }
    if (choix == 'Tomate'){
        if (!ingrédientsClient.includes(tomate) || ingrédientsClient == []) {
            ingrédientsClient.push(tomate)
            console.log("Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            choix2 = prompt();
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        } else {
            console.log("Votre Kebab contient déjà de la tomate. Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            choix2 = prompt()
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        }
    }
    if (choix == 'Viande'){
        if (!ingrédientsClient.includes(viande) || ingrédientsClient == []) {
            ingrédientsClient.push(viande)
            console.log("Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            choix2 = prompt();
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        } else {
            console.log("Votre Kebab contient déjà de la viande. Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            choix2 = prompt()
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        }
    }
    if (choix == 'Salade'){
        if (!ingrédientsClient.includes(salade) || ingrédientsClient == []) {
            ingrédientsClient.push(salade)
            choix2 = prompt("Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        } else {
            choix2 = prompt("Votre Kebab contient déjà de la salade. Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        }
    }
    if (choix == 'Oignon'){
        if (!ingrédientsClient.includes(oignon) || ingrédientsClient == []) {
            ingrédientsClient.push(oignon)
            choix2 = prompt("Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        } else {
            choix2 = prompt("Votre Kebab contient déjà de la oignon. Voulez-vous autre chose dans votre Kebab ? oui ou non\n")
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true
            }
        }
    }
}
if(ingrédientsClient.includes(viande)){
    console.log("Le kebab est carnivore");
} else {
    console.log("Végétarien");
}
console.log()


var ingrédientsClient = [];

var kebab = new Kebab(true, ingrédientsClient);