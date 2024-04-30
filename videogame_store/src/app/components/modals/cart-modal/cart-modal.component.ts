import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
})
export class CartModalComponent {
  constructor(private cartService: CartService) {}

  handleCloseModal() {
    return this.cartService.setIsCartOpen(false);
  }

  get isCartOpen() {
    return this.cartService.getIsCartOpen();
  }
}
