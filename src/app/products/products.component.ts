import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  subscription: Subscription | undefined;

  @Input() set Type(type: string) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.ProductsService.getItemByType(type).subscribe(products => {
      this.products = products;
    });
  }

  constructor(private ProductsService: ProductsService) {}
}
