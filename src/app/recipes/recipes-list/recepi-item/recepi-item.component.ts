import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepi-item',
  templateUrl: './recepi-item.component.html',
  styleUrls: ['./recepi-item.component.css'],
})
export class RecepiItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe() {
    this.selectedRecipe.emit();
  }
}
