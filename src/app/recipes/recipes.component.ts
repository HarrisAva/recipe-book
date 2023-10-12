import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {this.selectedRecipe = recipe;}
    )
  }

}



    // Recipe project idea: 
    // - Recipes by categories: soup, salad, pasta, curry,
    // noodle, dessert, appeitizer, drink - Recipes by ingredients: chicken, pork,
    // beef, fish, seafood, vegetable - Recipe model includes title, picture,
    // ingredients, preparation, prep time - Option to search by keyword and filter
    // by category and ingredient - User login/sign up for options to save and
    // print - Admin option to add/delete recipe
  
