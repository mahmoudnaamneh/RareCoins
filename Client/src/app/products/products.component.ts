import { Component, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy, OnChanges {
  @Input() Type: string = 'All';
  products: Product[] = [];
  subscription: Subscription | undefined;

  constructor(private ProductsService: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Type'] && changes['Type'].currentValue) {
      this.loadProducts(changes['Type'].currentValue);
    }
  }

  loadProducts(type: string): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (type === 'All') {
      this.subscription = this.ProductsService.getAllProducts().subscribe(products => {
        this.products = products;
      });
    } else if (type === 'Bronze') {
      this.subscription = this.ProductsService.getBronzeProducts().subscribe(products => {
        this.products = products;
      });
    } else if (type === 'Silver') {
      this.subscription = this.ProductsService.getSilverProducts().subscribe(products => {
        this.products = products;
      });
    } else if (type === 'Gold') {
      this.subscription = this.ProductsService.getGoldProducts().subscribe(products => {
        this.products = products;
      });
    } else {
      this.subscription = this.ProductsService.getItemByType(type).subscribe(products => {
        this.products = products;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
