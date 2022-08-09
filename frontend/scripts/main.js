import { sum } from './sum.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Counter from './counter.vue'

class TestCounter {
  constructor(initial) {
    this.value = initial
  }

  add(size) {
    this.value += size
  }
}

const test = async () => {
  const testCounter = new TestCounter('123')
  testCounter.add(2)

  return new Promise('test')
}

const main = async () => {
  const pinia = createPinia()

  createApp(Counter).use(pinia).mount('#counter')

  await test()
  console.log(sum(1, 2))
}

window.addEventListener('load', main)
