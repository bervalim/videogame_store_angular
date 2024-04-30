import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly isCartOpenSignal = signal(false);

  readonly cartProductListSignal = signal<IProduct[]>([]);

  getIsCartOpen() {
    return this.isCartOpenSignal();
  }

  getCartProductList() {
    return this.cartProductListSignal();
  }

  setIsCartOpen(value: boolean) {
    this.isCartOpenSignal.set(value);
  }

  addProductToCart(product: IProduct) {
    if (
      !this.cartProductListSignal().some(
        (cartProduct) => cartProduct.id === product.id
      )
    ) {
      this.cartProductListSignal.update((cartProductList) => [
        ...cartProductList,
        product,
      ]);
      alert('Produto adicionado ao carrinho!');
      this.setIsCartOpen(true);
    } else {
      alert('Este produto já foi adicionado ao carrinho!!!');
    }
  }

  removeProductFromCart(id: string) {
    this.cartProductListSignal.update((cartProductList) =>
      cartProductList.filter((product) => product.id !== id)
    );
  }
}
