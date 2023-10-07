import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

 // use Recipe model from 'recipe.model.ts'
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();  // output it to RecipeComponent

  recipes: Recipe[] = [
    new Recipe('A Test Recipe-1', 'This is simpy a test description-1', 'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg' ),
    new Recipe('A Test Recipe-2', 'This is simpy a test description-2', 'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg' )
  ]; 
  constructor() { }
  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
