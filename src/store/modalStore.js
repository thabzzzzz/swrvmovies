// Create a file named modalStore.js

import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    show: false,
  }),
  actions: {
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
    toggleModal() {
      this.show = !this.show;
    },
  },
});
