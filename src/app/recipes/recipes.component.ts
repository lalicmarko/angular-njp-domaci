import { Component, OnInit } from '@angular/core';
import { PRO,REC } from '../mockupData'
import { Recipe } from '../domain/recipe'
import { Product } from '../domain/product' 

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  constructor() { }

  ngOnInit() {
    this.recipes = REC;

  }
  viewRecipeDetail(): void{
    
  }

}
