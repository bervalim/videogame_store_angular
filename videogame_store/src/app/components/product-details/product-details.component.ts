import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  readonly productSignal = signal<IProduct | null>(null);
  constructor(
    private productRequest: ProductRequest,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productRequest.getTechProductRequest(id).subscribe((data) => {
          this.productSignal.set(data);
        });
      }
    });
  }

  get product() {
    return this.productSignal();
  }
}
