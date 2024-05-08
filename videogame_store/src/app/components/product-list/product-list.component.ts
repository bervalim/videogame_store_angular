import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(private cartService: CartService) {}

  @Input() productList!: IProduct[];

  @Input() title!: string;

  redirectURL(id: string) {
    return `/product/${id}`;
  }

  handleAddProductToCart(product: IProduct) {
    return this.cartService.addProductToCart(product);
  }
}
