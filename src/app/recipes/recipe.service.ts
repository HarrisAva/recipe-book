import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shipping-list.service";

// use @Injectable to access shopping list service (inject service to service)
@Injectable() 
export class RecipeService {

    // listening to onSelected event from recipe item selection
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe-1',
         'This is simpy a test description-1',
          'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg',
          [
            new Ingredient ('Meat', 1),
            new Ingredient ('French Fries', 20)
          ] ),
        new Recipe('A Test Recipe-2', 
        'This is simpy a test description-2', 
        'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg',
        [
          new Ingredient ('Buns', 2),
          new Ingredient ('Meat', 1)
        ] )
      ]; 

      //inject shoppling list service
      constructor(private slService: ShoppingListService) {}

      // to get a copy of list of recipes
      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

      }
}