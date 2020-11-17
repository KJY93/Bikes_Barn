import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // receive input from app component
  @Input() products = [];


  @Output() onAddItem = new EventEmitter<{item:string, url:string}> ();
  constructor() { }

  ngOnInit(): void {
  }

  // on trigger, this function will call the onAddItem to create a new event
  // taking in an object of item and url
  addItemToCart(item:string, url:string) {
    this.onAddItem.next({item, url});
  }
}
