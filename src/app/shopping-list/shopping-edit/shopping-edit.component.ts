import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef 
  @ViewChild('amountInput') ingredientAmount: ElementRef 
  @Output() addIngredient = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
this.addIngredient.emit({name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value})
  }

}
