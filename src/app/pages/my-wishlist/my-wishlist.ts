import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../stores/ecommerce-store';
import { ProductCard } from '../../components/product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIconButton, MatIcon],
  template: `
    <div class="mx-auto max-w-[1200] py-6 px-4">
      <app-back-button class="mb-6" label="Continue Shopping" navigateTo="/products/all">
        Continue Shopping
      </app-back-button>

      @if(store.wishlistCount() > 0) {
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">My Wishlist</h1>
        <span class="text-gray-500 text-xl">{{ store.wishlistCount() }} items</span>
      </div>

      <div class="responsive-grid">
        @for (product of store.wishlistItems(); track product.id) {
        <app-product-card [product]="product">
          <button
            matIconButton
            class="!absolute z-10 top-3 right-3 w-10 rounded-full !bg-white border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
            (click)="store.removeFromWishlist(product)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </app-product-card>
        }
      </div>
      } @else { }
    </div>
  `,
  styles: ``,
})
export default class MyWishlist {
  store = inject(EcommerceStore);
}
