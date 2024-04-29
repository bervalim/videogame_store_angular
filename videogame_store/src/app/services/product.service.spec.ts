import { TestBed } from '@angular/core/testing';

import { ProductRequest } from './product.service';

describe('ProductService', () => {
  let service: ProductRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
