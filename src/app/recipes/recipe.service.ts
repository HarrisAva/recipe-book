import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    // listening to onSelected event from recipe item selection
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe-1', 'This is simpy a test description-1', 'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg' ),
        new Recipe('A Test Recipe-2', 'This is simpy a test description-2', 'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg' )
      ]; 

      // to get a copy of list of recipes
      getRecipes() {
        return this.recipes.slice();
      }
}