import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for product 1',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 10
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for product 2',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 20
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Description for product 3',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 30
    }
  ];

}
