import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../stores/ecommerce-store';
import { Product } from '../../models/product';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  template: `
    <button
      matIconButton
      [class]="isInWishlist() ? '!text-red-500' : '!text-gray-400'"
      class="!absolute z-10 top-3 right-3 w-10 rounded-full !bg-white border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
      (click)="toggleWishlist(product())"
    >
      <mat-icon>{{ isInWishlist() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  store = inject(EcommerceStore);
  product = input.required<Product>();

  isInWishlist = computed(() => this.store.wishlistItems().find((p) => p.id === this.product().id));

  toggleWishlist = (product: Product) => {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  };
}
