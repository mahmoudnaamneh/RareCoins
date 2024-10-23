import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnChanges {
  @Input() type: string = 'All'; // Use default value if needed
  products: Product[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && changes['type'].currentValue) {
      this.loadProducts(changes['type'].currentValue);
    }
  }

  loadProducts(type: string): void {
    if (type === 'All') {
      this.ProductsService.getAllProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    } else if (type === 'Bronze') {
      this.ProductsService.getBronzeProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    } else if (type === 'Silver') {
      this.ProductsService.getSilverProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    } else if (type === 'Gold') {
      this.ProductsService.getGoldProducts().subscribe((products: Product[]) => {
        this.products = products;
      });
    } else {
      this.ProductsService.getItemByType(type).subscribe((products: Product[]) => {
        this.products = products;
      });
    }
  }
}
