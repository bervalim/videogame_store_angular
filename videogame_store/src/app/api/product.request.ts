import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductRequest {
  private BASE_URL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  getTechProductsListRequest() {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/product`);
  }

  getTechProductRequest(id: string) {
    return this.http.get<IProduct>(`${this.BASE_URL}/product/${id}`);
  }
}
