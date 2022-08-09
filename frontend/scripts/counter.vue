<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <div class="counter">
    <div class="counter-state">{{counter}}</div>
    <div class="counter-buttons-container">
      <button @click="counter++" class="counter-button increment">inc</button>
      <button @click="counter--" class="counter-button decrement">dec</button>
    </div>
  </div>
</template>
