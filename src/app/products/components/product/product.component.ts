import { Component, Input, OnInit } from '@angular/core';
import { ProductModelInterface } from '../../models/product-model-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModelInterface | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Product added');
  }
}
