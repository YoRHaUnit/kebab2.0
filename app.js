var prompt = require('prompt-sync')();
var includes = require('array-includes');

class Ingredient {
    constructor(name, isVegetarian, isPescitarian, isCarnivore) {
        this.name = name;
        this.isVegetarian = isVegetarian;
        this.isPescitarian = isPescitarian;
        this.isCarnivore = isCarnivore;
      }
}

class Fromage extends Ingredient {
    constructor(name) {
        this.name = 'Fromage : ' + name;
        super(name, true, false, false)
      }
}

// class Sauces extends Ingredient {
//     constructor(name) {
//         this.name = 'Sauce : ' name;
//         super(name, true, false, false)
//       }
// }

class Kebab {
    constructor(vegetarien, ingredients){
        this.vegetarien = vegetarien;
        this.ingredients = ingredients;
    }
    isVegetarian(){
        return this.ingredients.every(ingredient => ingredient.isVegetarian);
    }
    isPescitarian(){
        return this.ingredients.find(ingredient => ingredient.isPescitarian);
    }
    isCarnivore(){
        return this.ingredients.find(ingredient => ingredient.isCarnivore);
    }
    isDoubleCheese(){
        return this.ingredients.find(ingredient => ingredient.isDoubleCheese);
    }
}

var ingredientsDisponible = [];
var ingredientsClient = [];

var tomate = new Ingredient('Tomate', true, false, false);
var viande = new Ingredient('Doner', false, false, true);
var salade = new Ingredient('Salade', true, false, false);
var oignon = new Ingredient('Oignon', true, false, false);
var poisson = new Ingredient('Poisson', false, true, false);
var crevettes = new Ingredient('Crevettes', false, true, false);
var surimi = new Ingredient('Surimi', false, true, false);
var poulet = new Ingredient('Poulet', false, false, true);
var fromage = new Ingredient('Fromage', false, false, false);
// var blanche =  new Sauce('Blanche');
// var bechamel =  new Sauce('Béchamel');
// var algerienne =  new Sauce('Algérienne');
// var ketchup =  new Sauce('Ketchup');
// var mayo =  new Sauce('Mayonaise');
// var moutarde =  new Sauce('Moutarde');
// var barbecue =  new Sauce('Barbecue');
// var samourai =  new Sauce('samouraï');
// var cheddar =  new Sauce('Cheddar');
// var raclette =  new Sauce('Raclette');
// var maroilles =  new Sauce('Maroilles');

ingredientsDisponible.push(tomate);
ingredientsDisponible.push(viande);
ingredientsDisponible.push(salade);
ingredientsDisponible.push(oignon);
ingredientsDisponible.push(poisson);
ingredientsDisponible.push(crevettes);
ingredientsDisponible.push(surimi);
ingredientsDisponible.push(poulet);
ingredientsDisponible.push(fromage);

console.log('\n\nListe des ingrédients disponibles :');
console.table(ingredientsDisponible);

var choix = '';
var choix2= '';
var kebabFini = false;
while (!kebabFini){
    console.log("\nBonjour, que voulez-vous dans votre Kebab ?");
    choix = prompt();
    switch (choix) {
        case 'Tomate':
            ingredientChoice(tomate);
            break;
        case 'Doner':
            ingredientChoice(viande);
            break;
        case 'Salade':
            ingredientChoice(salade);
            break;
        case 'Oignon':
            ingredientChoice(oignon);
            break;
        case 'Poisson':
            ingredientChoice(poisson);
            break;
        case 'Crevettes':
            ingredientChoice(crevettes);
            break;
        case 'Fromage':
            ingredientChoice(fromage);
            break;    
        default:
            console.log('Veuillez choisir un ingrédient existant.');
            choix = '';
            break;
    }
}

var kebab = new Kebab(true, ingredientsClient);

if (kebab.isPescitarian()) {
    console.log("Le kebab est pescitarien");
} else if (kebab.isVegetarian()) {
    console.log("Le kebab est végétarien");
} else if (kebab.isCarnivore()) {
    console.log("Le kebab est carnivore");
}
if(kebab.isDoubleCheese()){
    console.log("(Avec ration double cheese");
}
function ingredientChoice(ingredient){
    if (!ingredientsClient.includes(ingredient) || ingredientsClient == []) {
        if(ingredient.name == "Fromage"){
            console.log("Double ration ?");
            choix2 = prompt();
            if(choix2 == "oui"){
                ingredientsClient.push(ingredient);
                choix = '';
                choix2 = '';
            }
        } else {
            ingredientsClient.push(ingredient);
            console.log("\nVoulez-vous autre chose dans votre Kebab ? oui ou non");
            choix2 = prompt();
            if (choix2 == 'oui') {
                choix = '';
                choix2 = '';
            } else {
                kebabFini = true;
            }
        }
    } else {
        console.log("\nVotre Kebab contient déjà de l'oignon. Voulez-vous autre chose dans votre Kebab ? oui ou non");
        choix2 = prompt();
        if (choix2 == 'oui') {
            choix = '';
            choix2 = '';
        } else {
            kebabFini = true;
        }
    }
}
