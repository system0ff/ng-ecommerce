import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel';
import { EcommerceStore } from '../../stores/ecommerce-store';

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanel],
  template: `
    <div appViewPanel>
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
      <div class="space-y-3 text-lg pt-4">
        <div class="flex justify-between border-t">
          <span>Subtotal</span>
          <span>$ {{ subtotal() }}</span>
        </div>
        <div class="flex justify-between">
          <span>Tax</span>
          <span>$ {{ tax() }}</span>
        </div>
        <div class="flex justify-between border-t pt-3 font-bold text-lg">
          <span>Total</span>
          <span>$ {{ total() }}</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SummarizeOrder {
  store = inject(EcommerceStore);

  private toFixedNumber(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.floor(value * factor) / factor;
  }

  subtotal = computed(() => {
    const value = this.store
      .cartItems()
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    return this.toFixedNumber(value, 2).toFixed(2);
  });

  tax = computed(() => {
    const subtotal = Number(this.subtotal());
    const taxValue = this.toFixedNumber(subtotal * 0.05, 2);
    return taxValue.toFixed(2);
  });

  total = computed(() => {
    const subtotal = Number(this.subtotal());
    const tax = Number(this.tax());
    const totalValue = this.toFixedNumber(subtotal + tax, 2);
    return totalValue.toFixed(2);
  });
}
