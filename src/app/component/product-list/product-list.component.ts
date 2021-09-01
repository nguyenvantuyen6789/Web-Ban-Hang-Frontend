import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

  @Input() productInComponent:any;
  constructor() { }

  ngOnInit(): void {
  }

}
