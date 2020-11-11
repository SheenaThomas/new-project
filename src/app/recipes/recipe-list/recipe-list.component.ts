import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
recipes: Recipe[] =  [
  new Recipe('A test Recipe', 'This is simply a test' , 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=1.00xw:0.752xh;0,0.144xh&resize=980:*')
];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
