import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

  @Input() product:any;
  @Output() onRemoveProduct = new EventEmitter();

  @Input() productInComponent:any;
  constructor() { }

  removeProductOnList(id: any) {
    this.onRemoveProduct.emit(id);
    console.log("Product Id: " + id);
    
  }
  ngOnInit(): void {
  }

}
