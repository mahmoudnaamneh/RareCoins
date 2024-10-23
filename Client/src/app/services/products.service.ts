import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:8000/Products'; // Updated port

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/');
  }
 
  getBronzeProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/product/Bronze');
  }

  getSilverProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/product/Silver');
  }

  getGoldProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/product/Gold');
  }
  getPopularProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/showPopular');
  }

  addProduct(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/addProduct');
  }

  getItemByType(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/product/:category');
  }

  updateProduct(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/updateProduct/:id');
  }
}
