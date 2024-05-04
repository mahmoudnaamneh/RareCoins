import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseURL: string = 'http://localhost:3000/products'; 
  baseURL1: string = 'http://localhost:3000/all'; 
  baseURL2: string = 'http://localhost:3000/bronze'; 
  baseURL3: string = 'http://localhost:3000/silver'; 
  baseURL4: string = 'http://localhost:3000/gold'; 
  baseURL5: string = 'http://localhost:3000/popularProducts'; 

  headers = { 'content-type': 'application/json' };
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseURL1);
  }

  getGold(): Observable<any> {
    return this.http.get<any>(this.baseURL4);
  }

  getSilver(): Observable<any> {
    return this.http.get<any>(this.baseURL3);
  }

  getBronze(): Observable<any> {
    return this.http.get<any>(this.baseURL2);
  }

  getPopularProducts(): Observable<any> {
    return this.http.get<any>(this.baseURL5);
  }

  getItemByType(type: string): Observable<any> {
    switch (type) {
      case 'gold':
        return this.http.get<any>(this.baseURL4);
      case 'silver':
        return this.http.get<any>(this.baseURL3);
      case 'bronze':
        return this.http.get<any>(this.baseURL2);
      default:
        return this.http.get<any>(this.baseURL1);
    }
  }
}
