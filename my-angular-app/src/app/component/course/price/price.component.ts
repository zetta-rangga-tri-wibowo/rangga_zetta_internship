import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges {

  @Input() price: number = 0;
  formattedPrice: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['price']) {
      this.formattedPrice = this.transformPrice(this.price);
    }
  }

  transformPrice(price: number): string {
    // Replace this with your own logic to transform the price into the desired currency format
    return `$${price.toFixed(2)}`;
  }

}
