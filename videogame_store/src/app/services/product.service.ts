import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductRequest {
  private BASE_URL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}
}
