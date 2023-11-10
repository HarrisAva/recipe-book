import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ava-recipe-book-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
    }

  fetchRecipes() {
    // pipe(take(1)) take the latest user (1 time only, then unscribe) t
    // exhaustMap wait for the first observable to complete, then pass it to function and return new observable of http request to get the recipes)
   // add user token as a querry parameter in URL
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http
      .get<Recipe[]>(
        'https://ava-recipe-book-default-rtdb.firebaseio.com/recipes.json',
        {
          params: new HttpParams().set('auth', user.token)
        }
      );
    }), map(recipes =>{
      return recipes.map(recipe => {
        return{
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients: []
        };
      });
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes);
    })
    );
  }
}

  // some new added recipe may not have ingredient, use pipe(map) to transform recipe data without ingredient to set it to empty array []
  // return recipes.map -> is normal JS array method 'map' that transform recipe array.


