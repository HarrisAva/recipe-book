import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // get a recipe from outside component using Input (from Recipe class in recipe.model.ts) 
  // then binding (sending) it to RecipeList component
  @Input() recipe: Recipe; 

  // binding click event of onSelectRecipe to display its detail
  // sending variable 'recipeSelected' to parent component
  @Output() recipeSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
    
  }
// function to emit clicking of onSelectRecipe, then output recipeSelected variable
  onSelected (recipe: string) {
    this.recipeSelected.emit(); 
    // emit recipe that is selected under recipe-list (see recipe-list html)
  }

}


// recipe item flows:

// 1- recipe item get a recipe from the Recipe class in recipe model (recipe.model.ts)
//     @Input() recipe: Recipe; 

// 2. binding (sending) each recipe to RecipeList component
//     (in recipe-list.component.ts:)
//     *ngFor="let recipeElement of recipes">
//     [recipe] = 'recipeElement' 
