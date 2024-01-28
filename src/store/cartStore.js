import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const existingCartItem = this.cart.find((item) => item.product.id === product.id);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.cart.push({
          product,
          quantity: 1,
        });
      }
    },

    updateCartItemQuantity(productId, quantity) {
      const cartItem = this.cart.find((item) => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
  persist: true, // Move this inside the state function
});
