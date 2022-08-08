import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepi-item',
  templateUrl: './recepi-item.component.html',
  styleUrls: ['./recepi-item.component.css'],
})
export class RecepiItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
