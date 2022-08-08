import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef 
  @ViewChild('amountInput') ingredientAmount: ElementRef 

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
this.slService.addIngredient({name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value})  
}

}
