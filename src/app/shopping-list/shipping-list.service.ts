import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }

    addIngredients(ingredients:Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // add all ingredients in one go then emit the event 
        // use spread operator to turn an array of elments into a list of elements
        this.ingredients.push(...ingredients);
        
        // to emit ingredients changed, pass a copy of it
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
