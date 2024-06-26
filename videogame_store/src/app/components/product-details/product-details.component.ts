import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { AnimationComponent } from '../animation/animation.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimationComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  readonly productSignal = signal<IProduct | null>(null);
  constructor(
    private productRequest: ProductRequest,
    private route: ActivatedRoute,
    private cartService: CartService
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

  handleAddProductToCart(product: IProduct) {
    return this.cartService.addProductToCart(product);
  }
}
