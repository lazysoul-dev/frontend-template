import { mount } from '@vue/test-utils'
import Counter from '../scripts/counter.vue'

describe('counter', () => {
  let wrapper = mount(Counter)

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it('must render counter initial state (0)', () => {
    expect(wrapper.find('.counter-state').text()).toContain('0')
  })

  it('must increment counter on increment button click', async  () => {
    expect(wrapper.find('.counter-state').text()).toContain('0')
    await wrapper.find('.counter-button.increment').trigger('click')
    expect(wrapper.find('.counter-state').text()).toContain('1')
  })

  it('must increment counter on increment button click', async  () => {
    expect(wrapper.find('.counter-state').text()).toContain('0')
    await wrapper.find('.counter-button.decrement').trigger('click')
    expect(wrapper.find('.counter-state').text()).toContain('-1')
  })
})
