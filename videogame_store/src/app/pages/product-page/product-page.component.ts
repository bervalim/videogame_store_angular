import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { IProduct } from '../../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent, ProductDetailsComponent],
  providers: [ProductRequest],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  readonly productListSignal = signal<IProduct[]>([]);
  constructor(
    private productRequest: ProductRequest,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productRequest.getTechProductsListRequest().subscribe((data) => {
          const filteredData = data.filter((product) => product.id !== id);
          this.productListSignal.set(filteredData);
        });
      }
    });
  }

  get productList() {
    return this.productListSignal();
  }
}
