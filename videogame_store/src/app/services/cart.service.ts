import { Injectable, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly isCartOpenSignal = signal(false);

  readonly cartProductListSignal = signal<IProduct[]>([]);

  private setCartListToLocalStorage(cartList: IProduct[]) {
    if (cartList.length > 0) {
      localStorage.setItem('@VSCart', JSON.stringify(cartList));
    } else {
      localStorage.removeItem('@VSCart');
    }
  }

  constructor(private toastr: ToastrService) {
    const getItem = localStorage.getItem('@VSCart');
    if (getItem) {
      this.cartProductListSignal.set(JSON.parse(getItem));
    }
  }

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
      this.cartProductListSignal.update((cartProductList) => {
        const newList = [...cartProductList, product];
        this.setCartListToLocalStorage(newList);
        return newList;
      });
      this.toastr.success('Produto adicionado ao carrinho com sucesso!');
      this.setIsCartOpen(true);
    } else {
      this.toastr.error('Este produto já foi adicionado ao carrinho!!!');
    }
  }

  removeProductFromCart(id: string) {
    this.cartProductListSignal.update((cartProductList) => {
      const updatedCartList = cartProductList.filter(
        (product) => product.id !== id
      );
      this.cartProductListSignal.set(updatedCartList);
      this.setCartListToLocalStorage(updatedCartList);
      this.toastr.success('Produto removido do carrinho com sucesso!!!');
      return updatedCartList;
    });
  }
}
