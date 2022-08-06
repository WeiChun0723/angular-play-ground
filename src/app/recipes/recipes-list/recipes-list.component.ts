import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Kam heong',
      'Best',
      'https://i.ytimg.com/vi/Ydvoe6WK6K0/hqdefault.jpg'
    ),
    new Recipe(
      'Butter Milk',
      'Best Also',
      'https://resepichenom.com/media/00ca27a9ee01ce35b3f2fdffc6c6c55886cfe04c.jpeg'
    )
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
