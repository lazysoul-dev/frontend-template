import { sum } from './sum'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Counter from './counter.vue'

const main = async () => {
  const pinia = createPinia()

  createApp(Counter).use(pinia).mount('#counter')

  console.log(sum(1, 2))
}

window.addEventListener('load', main)
