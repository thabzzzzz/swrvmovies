<template>
    <div class="relative">
      <svg class="w-24 h-24">
        <!-- Background circle -->
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="transparent"
          stroke="#718096"
          stroke-width="8"
        ></circle>
        <!-- Progress circle -->
        <circle
  v-if="percent > 0"
  cx="50%"
  cy="50%"
  r="45%"
  fill="transparent"
  :stroke="percent === 100 ? '#4299e1' : '#f56565'"
  stroke-linecap="round"
  :stroke-dasharray="`${(percent / 100) * circumference} ${circumference}`"
  :stroke-dashoffset="percent === 100 ? 0 : ((100 - percent) / 100) * circumference"
  stroke-width="8"
  :transform="'rotate(90 ' + 50 + ' ' + 50 + ')'"
></circle>


      </svg>
      <span class="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {{ percent }}%
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const percent = ref(33);
  const props = defineProps(['percent']);
  const circumference = ref(2 * Math.PI * 45);
  
  watch(() => props.percent, () => {
    // Recalculate circumference if percent changes
    circumference.value = 2 * Math.PI * 45;
  });
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  