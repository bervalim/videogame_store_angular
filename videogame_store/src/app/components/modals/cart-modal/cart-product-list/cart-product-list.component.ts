import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-product-list.component.html',
  styleUrl: './cart-product-list.component.scss',
})
export class CartProductListComponent {
  constructor(private cartService: CartService) {}

  handleRemoveProductFromCart(id: string) {
    return this.cartService.removeProductFromCart(id);
  }

  get cartProductList() {
    return this.cartService.getCartProductList();
  }
}
