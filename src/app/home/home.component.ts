import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getPopularProducts().subscribe((products: Product[]) => {
      this.popularProducts = products;
    });
  }
}
