import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { ProductPageComponent } from './sastojci-component/product-page.component'
import { NewRecepieComponent } from './new-recepie/new-recepie.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'newRecipe', component: NewRecepieComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
