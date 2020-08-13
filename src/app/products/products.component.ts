import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private contentfullService: ContentfulService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    const products = await this.contentfullService.getProducts();
    this.products = products;
  }
}
