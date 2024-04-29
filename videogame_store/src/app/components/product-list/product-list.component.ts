import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  // Este componente irá receber duas possíves lista
  // uma terá todos os produtos
  // A outra terá todos menos o referenciado pela URL.
  @Input() productList!: IProduct[];

  @Input() title!: string;
}
