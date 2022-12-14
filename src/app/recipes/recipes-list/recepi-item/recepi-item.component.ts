import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepi-item',
  templateUrl: './recepi-item.component.html',
  styleUrls: ['./recepi-item.component.css'],
})
export class RecepiItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {}
}
