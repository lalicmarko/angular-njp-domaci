import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { NavComponent }         from './nav-component/nav.component';

import { AppRoutingModule }     from './app-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ProductPageComponent } from './sastojci-component/product-page.component';
import { NewRecepieComponent } from './new-recepie/new-recepie.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    NavComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    ProductPageComponent,
    NewRecepieComponent
  ],
  bootstrap: [ NavComponent ]
})
export class AppModule { }
