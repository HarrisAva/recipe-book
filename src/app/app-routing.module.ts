import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

  
const appRoutes: Routes = [
    // pathMatch to only redirect if the full path is empty 
    // (overide the default of prefix and empty path)
    {path: '', redirectTo: '/recipes', pathMatch:'full'}, 
    {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ] },
    {path: 'shopping-list', component: ShoppingListComponent},
  ];

  @NgModule({
    // pass our appRoutes to configure/add to Angular/router
    imports: [RouterModule.forRoot(appRoutes)], 

    // export configured router in this extra module to main app.module
    exports: [RouterModule]
  })


export class AppRoutingModule {

}