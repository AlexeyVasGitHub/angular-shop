import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModelInterface } from '../../models/product-model-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: ProductModelInterface[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.items = this.productService.getProducts();
  }

}
