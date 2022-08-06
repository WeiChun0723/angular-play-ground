import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('curry leaf', 4)]

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(event: any){
    console.log(event)
this.ingredients.push(new Ingredient(event.name, event.amount))
  }

}
