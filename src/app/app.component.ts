import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Website Bán Hàng';

  listProduct: Product[] = [
    {
      id: '1',
      name: 'PRODUCT 1 Xe máy',
      description: 'Description for product item number 1',
      img: 'https://www.w3schools.com/html/pic_trulli.jpg',
      price: 15000
    },

    {
      id: '2',
      name: 'PRODUCT 2 Ô Tô',
      description: 'Description for product item number 2',
      img: 'https://www.w3schools.com/html/img_chania.jpg',
      price: 25000
    },
  ];

  removeProduct(productId: any) {
    const index = this.listProduct.findIndex((obj: {id: any;}) => obj.id === productId);

    this.listProduct.splice(index, 1);
    console.log("index: " + index);
    
    
  }

  
}
