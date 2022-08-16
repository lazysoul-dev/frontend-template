<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

const counter: Ref<number> = ref(0)
</script>

<template>
  <div class="counter">
    <div class="counter-state">{{counter}}</div>
    <div class="test-flex test-space-x-[20px]">
      <button @click="counter++" class="counter-button increment">inc</button>
      <button @click="counter--" class="counter-button decrement">dec</button>
    </div>
  </div>
</template>
