import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("Kam heong", "Best", "https://i.ytimg.com/vi/Ydvoe6WK6K0/hqdefault.jpg")]

  constructor() { }

  ngOnInit(): void {
  }

}
