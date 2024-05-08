import { Component, signal } from '@angular/core';
import { ProductRequest } from '../../api/product.request';
import { IProduct } from '../../../interfaces/product.interface';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductListComponent, HeroSectionComponent, ReactiveFormsModule],
  providers: [ProductRequest],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly productListSignal = signal<IProduct[]>([]);

  constructor(private productRequest: ProductRequest) {
    this.productRequest.getTechProductsListRequest().subscribe((data) => {
      this.productListSignal.set(data);
    });
  }

  get productList() {
    return this.productListSignal();
  }
}
