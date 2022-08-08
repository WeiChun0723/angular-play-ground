import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Kam heong',
      'Best',
      'https://i.ytimg.com/vi/Ydvoe6WK6K0/hqdefault.jpg',
      [new Ingredient('Soy Sauce', 1), new Ingredient('Sugar', 1)]
    ),
    new Recipe(
      'Butter Milk',
      'Best Also',
      'https://resepichenom.com/media/00ca27a9ee01ce35b3f2fdffc6c6c55886cfe04c.jpeg',
      [new Ingredient('Sugar', 1), new Ingredient('Salt', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
